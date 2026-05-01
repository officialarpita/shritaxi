export interface Referral {
  code: string;
  referrer: string;
  notes?: string;
}

export const referrals: Referral[] = [
  // Add real entries here. Code is matched case-insensitively.
  { code: 'ARV010', referrer: 'Arun', notes: 'Friend' },
];

const referralMap = new Map(referrals.map((r) => [r.code.toUpperCase(), r]));

export function findReferral(raw: string | undefined | null): Referral | null {
  if (!raw) return null;
  const code = raw.trim().toUpperCase();
  if (!code) return null;
  return referralMap.get(code) ?? null;
}
