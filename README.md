# Shri Taxi

Taxi booking landing page for a Dehradun-based operator serving Uttarakhand routes. Static site with one interactive form; bookings fire a Telegram message to the owner and append a row to a Google Sheet.

**Stack:** Astro (static) → Cloudflare Pages + Pages Functions · Cloudflare Turnstile · Telegram Bot API · Google Sheets (Apps Script).
**Ongoing cost:** ₹0 / $0.

## Local development

```bash
npm install
npm run dev                     # Astro dev server at http://localhost:4321
npm run build                   # outputs to dist/
npm run pages:dev               # wrangler pages dev dist — emulates the form handler
npm run typecheck               # astro check
```

Copy `.env.example` → `.env` and fill in the values (see below). For `npm run pages:dev` you also need a `.dev.vars` file with the same server-side vars (Turnstile secret, Telegram token, Sheets webhook) because Wrangler reads from there, not `.env`.

## One-time owner/client setup

### 1. Telegram bot (owner already uses Telegram)

1. Owner opens Telegram → search **@BotFather** → `/newbot` → choose a name and username.
2. BotFather replies with a token — save as `TELEGRAM_BOT_TOKEN`.
3. Owner opens the new bot and presses **Start** (or sends any message).
4. On your machine:
   ```bash
   curl "https://api.telegram.org/bot<TOKEN>/getUpdates"
   ```
   Copy `result[0].message.chat.id` — save as `TELEGRAM_CHAT_ID`.

### 2. Google Sheet backup log

1. Create a sheet "Shri Taxi Bookings" with a header row:
   `timestamp | name | phone | pickup | drop | date | trip_type | vehicle | notes | ip`
2. **Extensions → Apps Script**, paste:
   ```js
   function doPost(e) {
     const data = JSON.parse(e.postData.contents);
     const sheet = SpreadsheetApp.getActiveSheet();
     sheet.appendRow([
       data.timestamp, data.name, data.phone, data.pickup, data.drop,
       data.date, data.trip_type, data.vehicle, data.notes, data.ip,
     ]);
     return ContentService.createTextOutput(JSON.stringify({ ok: true }))
       .setMimeType(ContentService.MimeType.JSON);
   }
   ```
3. **Deploy → New deployment → Type: Web app**, Execute as: **Me**, Who has access: **Anyone**.
4. Copy the `/exec` URL — save as `GOOGLE_SHEETS_WEBHOOK_URL`.

### 3. Cloudflare Turnstile (free spam protection)

1. Cloudflare dashboard → **Turnstile** → Add site → widget mode: Managed.
2. Copy **Site Key** (save as `PUBLIC_TURNSTILE_SITE_KEY`) and **Secret Key** (save as `TURNSTILE_SECRET_KEY`).

### 4. Cloudflare Pages deploy

1. Push this repo to GitHub/GitLab.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**. Pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Settings → Environment variables** (Production + Preview). Add all seven from `.env.example`. Mark the secret ones as type `Secret`.
5. **Settings → Functions → Compatibility flags** — nothing special needed, default is fine.
6. Trigger a deploy.

### 5. Domain (Hostinger → Cloudflare)

1. Cloudflare dashboard → **Add a site** → enter your domain → pick the Free plan.
2. Cloudflare gives you two nameservers.
3. Hostinger → **Domains → DNS / Nameservers** → replace with the two Cloudflare NS records.
4. Wait for propagation (usually minutes, up to a few hours).
5. In Cloudflare Pages → project → **Custom domains** → add apex + `www`.
6. **Hostinger WordPress hosting plan: leave it untouched. Let it lapse at renewal.**

## Environment variables

| Name | Visibility | Purpose |
|---|---|---|
| `TELEGRAM_BOT_TOKEN` | Secret | From @BotFather |
| `TELEGRAM_CHAT_ID` | Plain | Owner's chat id |
| `TURNSTILE_SECRET_KEY` | Secret | Server-side verify |
| `GOOGLE_SHEETS_WEBHOOK_URL` | Secret | Apps Script `/exec` URL |
| `PUBLIC_TURNSTILE_SITE_KEY` | Plain (public) | Injected into the form widget |
| `PUBLIC_WHATSAPP_NUMBER` | Plain (public) | `+91…` for `wa.me/` links |
| `PUBLIC_BUSINESS_PHONE` | Plain (public) | `+91…` for `tel:` links |

Only `PUBLIC_*` variables are exposed to the browser bundle; the rest stay inside the Pages Function.

## Project layout

```
src/
  components/      # TopBar, Header, Hero, BookingForm, TrustBar,
                   # ServicesGrid, PopularRoutes, Fleet, Packages,
                   # Reviews, FAQ, Footer, WhatsAppFloat
  data/            # services, routes, fleet, packages, faqs,
                   # testimonials, locations — edit these to change content
  layouts/Base.astro
  pages/index.astro
  styles/global.css
functions/
  api/book.ts      # Pages Function: Turnstile → Telegram → Sheets
public/            # robots.txt, favicon, /images
```

## Updating content

For V1, all content is in `src/data/*.ts`. To add a new vehicle or route:

1. Edit the corresponding file.
2. Commit + push → Cloudflare Pages auto-deploys in ~60 seconds.

When the client wants autonomy, migrate `fleet`, `routes`, `packages`, `faqs`, `services` to Google Sheets (see the plan file for the pattern) and give them a "Publish" button that triggers a Pages deploy hook.

## Pre-launch checklist

- [ ] Replace the Google Maps iframe `q=` value in `src/components/Reviews.astro` with the client's real Google Business listing URL.
- [ ] Swap placeholder testimonials in `src/data/testimonials.ts` for real customer quotes (with permission).
- [ ] Add a real hero background image to `public/images/hero-mountains.jpg` (royalty-free or client-provided).
- [ ] Add real fleet photos to `public/images/` and wire them into `src/components/Fleet.astro`.
- [ ] Create and add `public/images/og.jpg` (1200×630 OG image).
- [ ] Set all 7 env vars in Cloudflare Pages (Production + Preview).
- [ ] Submit a test booking from the preview URL — confirm Telegram arrives and Sheet row appears.
- [ ] Run Lighthouse; target Performance/SEO/Accessibility ≥ 95.
- [ ] Verify `wa.me/` and `tel:` links on a real mobile device.
