import { findReferral } from './_referrals';

interface Env {
  TELEGRAM_BOT_TOKEN: string;
  TELEGRAM_CHAT_ID: string;
  TURNSTILE_SECRET_KEY: string;
  GOOGLE_SHEETS_WEBHOOK_URL?: string;
}

interface BookingPayload {
  name?: string;
  phone?: string;
  pickup?: string;
  drop?: string;
  date?: string;
  time?: string;
  trip_type?: string;
  vehicle?: string;
  notes?: string;
  referral_code?: string;
  booking_id?: string;
  company?: string;
  turnstile_token?: string;
  // Local Hire fields
  local_package?: string;
  local_pickup?: string;
  local_spots?: string;
  // Airport fields
  airport_journey?: string;
  airport_select?: string;
  airport_location?: string;
}

const sanitizeReferralCode = (raw: string): string =>
  raw.replace(/\p{C}/gu, '').slice(0, 32).toUpperCase();

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
  const body = new FormData();
  body.append('secret', secret);
  body.append('response', token);
  if (ip) body.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  });
  if (!res.ok) return false;
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  let payload: BookingPayload;
  try {
    payload = await ctx.request.json();
  } catch {
    return json({ ok: false, error: 'Invalid JSON' }, 400);
  }

  // Honeypot: a bot filled it. Silently accept so we don't signal the trap.
  if (payload.company && payload.company.trim() !== '') {
    return json({ ok: true });
  }

  const token = (payload.turnstile_token || '').trim();
  if (!token) return json({ ok: false, error: 'Missing security check.' }, 400);

  const ip = ctx.request.headers.get('CF-Connecting-IP');
  const verified = await verifyTurnstile(token, ctx.env.TURNSTILE_SECRET_KEY, ip);
  if (!verified) return json({ ok: false, error: 'Security check failed. Please reload and try again.' }, 400);

  // Validate — base fields required for all trip types
  const baseRequired = ['name', 'phone', 'date', 'time', 'trip_type', 'vehicle'] as const;
  for (const k of baseRequired) {
    const v = (payload[k] || '').toString().trim();
    if (!v) return json({ ok: false, error: `Please fill in ${k.replace('_', ' ')}.` }, 400);
  }

  // Pickup/drop required only for one-way and round-trip
  if (payload.trip_type === 'one-way' || payload.trip_type === 'round-trip') {
    if (!(payload.pickup || '').trim()) return json({ ok: false, error: 'Please fill in pickup.' }, 400);
    if (!(payload.drop || '').trim()) return json({ ok: false, error: 'Please fill in drop.' }, 400);
  }

  // Local hire — package and pickup location required
  if (payload.trip_type === 'local') {
    if (!(payload.local_package || '').trim()) return json({ ok: false, error: 'Please select a package.' }, 400);
    if (!(payload.local_pickup || '').trim()) return json({ ok: false, error: 'Please enter your pickup location.' }, 400);
  }

  // Airport — journey type, airport and location required
  if (payload.trip_type === 'airport') {
    if (!(payload.airport_journey || '').trim()) return json({ ok: false, error: 'Please select journey type.' }, 400);
    if (!(payload.airport_select || '').trim()) return json({ ok: false, error: 'Please select an airport.' }, 400);
    if (!(payload.airport_location || '').trim()) return json({ ok: false, error: 'Please enter your location.' }, 400);
  }
  if (!/^[+0-9 \-]{7,15}$/.test(payload.phone!.trim())) {
    return json({ ok: false, error: 'Please enter a valid phone number.' }, 400);
  }
  const d = new Date(payload.date!);
  if (Number.isNaN(d.getTime()) || d < new Date(new Date().setHours(0, 0, 0, 0))) {
    return json({ ok: false, error: 'Please pick today or a future date.' }, 400);
  }

  const tripLabels: Record<string, string> = {
    'one-way': 'One-way',
    'round-trip': 'Round-trip',
    'local': 'Local',
    'airport': 'Airport',
  };
  const tripLabel = tripLabels[payload.trip_type!] || payload.trip_type!;

  const safeCode = sanitizeReferralCode((payload.referral_code || '').toString().trim());
  const referral = safeCode ? findReferral(safeCode) : null;
  const referralLine = !safeCode
    ? null
    : referral
      ? `<b>Referral:</b> ${escapeHtml(safeCode)} → ${escapeHtml(referral.referrer)} (verified)`
      : `<b>Referral:</b> ${escapeHtml(safeCode)} — unknown`;

  // Booking ID: trust client-supplied if present, otherwise generate a server-side fallback
  const bookingId = (payload.booking_id || '').trim().replace(/[^A-Z0-9-]/gi, '').slice(0, 32)
    || `SHRI-${new Date().toISOString().slice(2,10).replace(/-/g,'')}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;

  // Build Telegram message based on trip type
  const lines = [
    '<b>New booking request</b>',
    `<b>Booking ID:</b> ${escapeHtml(bookingId)}`,
    `<b>Trip:</b> ${tripLabel}`,
    `<b>Name:</b> ${escapeHtml(payload.name!)}`,
    `<b>Phone:</b> ${escapeHtml(payload.phone!)}`,
  ];

  if (payload.trip_type === 'local') {
    lines.push(`<b>Package:</b> ${escapeHtml(payload.local_package || '-')}`);
    lines.push(`<b>Pickup Location:</b> ${escapeHtml(payload.local_pickup || '-')}`);
    if (payload.local_spots) lines.push(`<b>Places to visit:</b> ${escapeHtml(payload.local_spots)}`);
  } else if (payload.trip_type === 'airport') {
    lines.push(`<b>Journey Type:</b> ${escapeHtml(payload.airport_journey || '-')}`);
    lines.push(`<b>Airport:</b> ${escapeHtml(payload.airport_select || '-')}`);
    lines.push(`<b>Location:</b> ${escapeHtml(payload.airport_location || '-')}`);
  } else {
    lines.push(`<b>Pickup:</b> ${escapeHtml(payload.pickup || '-')}`);
    lines.push(`<b>Drop:</b> ${escapeHtml(payload.drop || '-')}`);
  }

  lines.push(
    `<b>Date:</b> ${escapeHtml(payload.date!)}`,
    `<b>Time:</b> ${escapeHtml(payload.time!)}`,
    `<b>Vehicle:</b> ${escapeHtml(payload.vehicle!)}`,
    `<b>Notes:</b> ${escapeHtml(payload.notes?.trim() || '-')}`,
  );
  if (referralLine) lines.push(referralLine);
  const text = lines.join('\n');

  const tgRes = await fetch(
    `https://api.telegram.org/bot${ctx.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        chat_id: ctx.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    }
  );

  if (!tgRes.ok) {
    const errBody = await tgRes.text().catch(() => '');
    console.error('Telegram send failed:', tgRes.status, errBody);
    return json({ ok: false, error: 'Could not deliver booking. Please call us directly.' }, 500);
  }

  // Fire-and-forget log to Google Sheets. Never fail the request if this errors.
  if (ctx.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    ctx.waitUntil(
      fetch(ctx.env.GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          booking_id: bookingId,
          name: payload.name,
          phone: payload.phone,
          trip_type: tripLabel,
          // One Way / Round Trip
          pickup: payload.pickup || '',
          drop: payload.drop || '',
          // Local Hire
          local_package: payload.local_package || '',
          local_pickup: payload.local_pickup || '',
          local_spots: payload.local_spots || '',
          // Airport
          airport_journey: payload.airport_journey || '',
          airport_select: payload.airport_select || '',
          airport_location: payload.airport_location || '',
          // Common
          date: payload.date,
          time: payload.time,
          vehicle: payload.vehicle,
          notes: payload.notes || '',
          ip: ip || '',
          referral_code: safeCode,
          referrer: referral ? referral.referrer : '',
        }),
      }).catch((err) => {
        console.error('Sheets log failed:', err);
      })
    );
  }

  return json({ ok: true, booking_id: bookingId });
};

export const onRequest: PagesFunction<Env> = async (ctx) => {
  if (ctx.request.method === 'POST') return onRequestPost(ctx);
  return new Response('Method Not Allowed', { status: 405, headers: { allow: 'POST' } });
};
