// ================================================================
// SHRI TAXI — Route Price Configuration
// ================================================================
// Edit prices HERE only — Hero.astro reads from this file
// After editing: commit to GitHub → Cloudflare auto-rebuilds (~2 min)
// ================================================================
//
// PRICING LOGIC:
// ─────────────────────────────────────────────────────────────────
// SHORT ROUTES (≤150km): Fixed OW + RT prices shown
// LONG ROUTES (>150km):  Per-day rate shown (handled in Hero.astro)
//                        ₹3,599/day Sedan · ₹4,499/day Ertiga · ₹5,670/day Innova
//                        Up to 150km/day · ₹12/km extra (Sedan)
// AIRPORT PICKUP:        + airport parking charges noted
// CITY RIDES:            Contact us message shown
// CUSTOM (Agra/Jaipur):  WhatsApp for quote
// ================================================================

export type VehiclePrice = {
  sedan_ow:   number;
  sedan_rt:   number;
  ertiga_ow:  number;
  ertiga_rt:  number;
  innova_ow:  number;
  innova_rt:  number;
  tempo?:     'best' | number;
  airportPickup?: boolean;  // true = show airport parking note
};

export const routePrices: Record<string, VehiclePrice> = {

  // ── JOLLY GRANT AIRPORT TRANSFERS (fixed price) ───────────────
  // Airport DROP — no parking charge
  'dehradun_airport':      { sedan_ow:1000,  sedan_rt:1800,  ertiga_ow:1400,  ertiga_rt:2500,  innova_ow:1800,  innova_rt:3200,  tempo:'best' },
  'haridwar_airport':      { sedan_ow:2500,  sedan_rt:4500,  ertiga_ow:3200,  ertiga_rt:5800,  innova_ow:4000,  innova_rt:7200,  tempo:'best' },
  'rishikesh_airport':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'mussoorie_airport':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'dehradun_isbt_airport': { sedan_ow:1500,  sedan_rt:2800,  ertiga_ow:2000,  ertiga_rt:3700,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },

  // Airport PICKUP — show airport parking note
  'airport_dehradun':      { sedan_ow:1000,  sedan_rt:1800,  ertiga_ow:1400,  ertiga_rt:2500,  innova_ow:1800,  innova_rt:3200,  tempo:'best', airportPickup:true },
  'airport_haridwar':      { sedan_ow:2500,  sedan_rt:4500,  ertiga_ow:3200,  ertiga_rt:5800,  innova_ow:4000,  innova_rt:7200,  tempo:'best', airportPickup:true },
  'airport_rishikesh':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best', airportPickup:true },
  'airport_mussoorie':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best', airportPickup:true },
  'airport_dehradun_isbt': { sedan_ow:1500,  sedan_rt:2800,  ertiga_ow:2000,  ertiga_rt:3700,  innova_ow:3500,  innova_rt:6500,  tempo:'best', airportPickup:true },

  // ── FROM DEHRADUN (short/fixed routes) ───────────────────────
  'dehradun_mussoorie':    { sedan_ow:1500,  sedan_rt:2500,  ertiga_ow:2000,  ertiga_rt:3200,  innova_ow:2500,  innova_rt:4000,  tempo:'best' },
  'mussoorie_dehradun':    { sedan_ow:1500,  sedan_rt:2500,  ertiga_ow:2000,  ertiga_rt:3200,  innova_ow:2500,  innova_rt:4000,  tempo:'best' },
  'dehradun_haridwar':     { sedan_ow:2000,  sedan_rt:3200,  ertiga_ow:2500,  ertiga_rt:4000,  innova_ow:3200,  innova_rt:5200,  tempo:'best' },
  'haridwar_dehradun':     { sedan_ow:2000,  sedan_rt:3200,  ertiga_ow:2500,  ertiga_rt:4000,  innova_ow:3200,  innova_rt:5200,  tempo:'best' },
  'dehradun_rishikesh':    { sedan_ow:2000,  sedan_rt:3200,  ertiga_ow:2500,  ertiga_rt:4000,  innova_ow:3200,  innova_rt:5200,  tempo:'best' },
  'rishikesh_dehradun':    { sedan_ow:2000,  sedan_rt:3200,  ertiga_ow:2500,  ertiga_rt:4000,  innova_ow:3200,  innova_rt:5200,  tempo:'best' },
  'dehradun_dhanaulti':    { sedan_ow:3000,  sedan_rt:4000,  ertiga_ow:5200,  ertiga_rt:6200,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'dhanaulti_dehradun':    { sedan_ow:3000,  sedan_rt:4000,  ertiga_ow:5200,  ertiga_rt:6200,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'dehradun_tehri':        { sedan_ow:3500,  sedan_rt:4500,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'tehri_dehradun':        { sedan_ow:3500,  sedan_rt:4500,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'dehradun_uttarkashi':   { sedan_ow:4000,  sedan_rt:6000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'uttarkashi_dehradun':   { sedan_ow:4000,  sedan_rt:6000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'dehradun_lansdowne':    { sedan_ow:4500,  sedan_rt:7000,  ertiga_ow:6000,  ertiga_rt:9000,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'lansdowne_dehradun':    { sedan_ow:4500,  sedan_rt:7000,  ertiga_ow:6000,  ertiga_rt:9000,  innova_ow:7500,  innova_rt:12000, tempo:'best' },

  // ── INTERCITY FIXED ROUTES ────────────────────────────────────
  'dehradun_delhi':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_dehradun':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'dehradun_chandigarh':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_dehradun':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'haridwar_rishikesh':    { sedan_ow:1000,  sedan_rt:1600,  ertiga_ow:1200,  ertiga_rt:1900,  innova_ow:1500,  innova_rt:2400  },
  'rishikesh_haridwar':    { sedan_ow:1000,  sedan_rt:1600,  ertiga_ow:1200,  ertiga_rt:1900,  innova_ow:1500,  innova_rt:2400  },
  'delhi_haridwar':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'haridwar_delhi':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_rishikesh':       { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'rishikesh_delhi':       { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_mussoorie':       { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'mussoorie_delhi':       { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'delhi_chandigarh':      { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_delhi':      { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_haridwar':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'haridwar_chandigarh':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_rishikesh':  { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'rishikesh_chandigarh':  { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_mussoorie':  { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'mussoorie_chandigarh':  { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'haridwar_mussoorie':    { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'mussoorie_haridwar':    { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'rishikesh_mussoorie':   { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'mussoorie_rishikesh':   { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'uttarkashi_rishikesh':  { sedan_ow:3500,  sedan_rt:5500,  ertiga_ow:5000,  ertiga_rt:7500,  innova_ow:6000,  innova_rt:9500,  tempo:'best' },
  'rishikesh_uttarkashi':  { sedan_ow:3500,  sedan_rt:5500,  ertiga_ow:5000,  ertiga_rt:7500,  innova_ow:6000,  innova_rt:9500,  tempo:'best' },
  'delhi_uttarkashi':      { sedan_ow:8000,  sedan_rt:12000, ertiga_ow:12000, ertiga_rt:17000, innova_ow:15000, innova_rt:21000, tempo:'best' },
  'uttarkashi_delhi':      { sedan_ow:8000,  sedan_rt:12000, ertiga_ow:12000, ertiga_rt:17000, innova_ow:15000, innova_rt:21000, tempo:'best' },
  // ── AIRPORT ↔ HILL STATIONS ──────────────────────────────────
  'airport_dhanaulti':     { sedan_ow:3200,  sedan_rt:4500,  ertiga_ow:5500,  ertiga_rt:6800,  innova_ow:7000,  innova_rt:11000, tempo:'best', airportPickup:true },
  'dhanaulti_airport':     { sedan_ow:3200,  sedan_rt:4500,  ertiga_ow:5500,  ertiga_rt:6800,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'airport_tehri':         { sedan_ow:3800,  sedan_rt:5000,  ertiga_ow:6000,  ertiga_rt:7500,  innova_ow:7500,  innova_rt:12000, tempo:'best', airportPickup:true },
  'tehri_airport':         { sedan_ow:3800,  sedan_rt:5000,  ertiga_ow:6000,  ertiga_rt:7500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'airport_uttarkashi':    { sedan_ow:4500,  sedan_rt:7000,  ertiga_ow:6000,  ertiga_rt:8000,  innova_ow:7500,  innova_rt:12000, tempo:'best', airportPickup:true },
  'uttarkashi_airport':    { sedan_ow:4500,  sedan_rt:7000,  ertiga_ow:6000,  ertiga_rt:8000,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'chandigarh_airport':    { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'airport_chandigarh':    { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best', airportPickup:true },
  'chandigarh_airport':    { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'airport_delhi':         { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best', airportPickup:true },
  'delhi_airport_route':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },

  // ── MUSSOORIE ↔ DHANAULTI / TEHRI ────────────────────────────
  'mussoorie_dhanaulti':   { sedan_ow:1500,  sedan_rt:2500,  ertiga_ow:2000,  ertiga_rt:3200,  innova_ow:2500,  innova_rt:4000,  tempo:'best' },
  'dhanaulti_mussoorie':   { sedan_ow:1500,  sedan_rt:2500,  ertiga_ow:2000,  ertiga_rt:3200,  innova_ow:2500,  innova_rt:4000,  tempo:'best' },
  'mussoorie_tehri':       { sedan_ow:2000,  sedan_rt:3200,  ertiga_ow:2800,  ertiga_rt:4200,  innova_ow:3500,  innova_rt:5500,  tempo:'best' },
  'tehri_mussoorie':       { sedan_ow:2000,  sedan_rt:3200,  ertiga_ow:2800,  ertiga_rt:4200,  innova_ow:3500,  innova_rt:5500,  tempo:'best' },
  'mussoorie_uttarkashi':  { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'uttarkashi_mussoorie':  { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },

  // ── DHANAULTI ↔ HARIDWAR / RISHIKESH / TEHRI / UTTARKASHI ────
  'dhanaulti_haridwar':    { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'haridwar_dhanaulti':    { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'dhanaulti_rishikesh':   { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'rishikesh_dhanaulti':   { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'dhanaulti_tehri':       { sedan_ow:1500,  sedan_rt:2500,  ertiga_ow:2000,  ertiga_rt:3200,  innova_ow:2500,  innova_rt:4000,  tempo:'best' },
  'tehri_dhanaulti':       { sedan_ow:1500,  sedan_rt:2500,  ertiga_ow:2000,  ertiga_rt:3200,  innova_ow:2500,  innova_rt:4000,  tempo:'best' },
  'dhanaulti_uttarkashi':  { sedan_ow:3500,  sedan_rt:5500,  ertiga_ow:5000,  ertiga_rt:7000,  innova_ow:6500,  innova_rt:10000, tempo:'best' },
  'uttarkashi_dhanaulti':  { sedan_ow:3500,  sedan_rt:5500,  ertiga_ow:5000,  ertiga_rt:7000,  innova_ow:6500,  innova_rt:10000, tempo:'best' },

  // ── TEHRI ↔ HARIDWAR / RISHIKESH / UTTARKASHI ────────────────
  'tehri_haridwar':        { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'haridwar_tehri':        { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'tehri_rishikesh':       { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'rishikesh_tehri':       { sedan_ow:3500,  sedan_rt:5000,  ertiga_ow:5500,  ertiga_rt:7000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'tehri_uttarkashi':      { sedan_ow:2500,  sedan_rt:4000,  ertiga_ow:3500,  ertiga_rt:5500,  innova_ow:4500,  innova_rt:7000,  tempo:'best' },
  'uttarkashi_tehri':      { sedan_ow:2500,  sedan_rt:4000,  ertiga_ow:3500,  ertiga_rt:5500,  innova_ow:4500,  innova_rt:7000,  tempo:'best' },

  // ── UTTARKASHI ↔ HARIDWAR / CHANDIGARH ───────────────────────
  'uttarkashi_haridwar':   { sedan_ow:4000,  sedan_rt:6500,  ertiga_ow:5500,  ertiga_rt:8000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'haridwar_uttarkashi':   { sedan_ow:4000,  sedan_rt:6500,  ertiga_ow:5500,  ertiga_rt:8000,  innova_ow:7000,  innova_rt:11000, tempo:'best' },
  'uttarkashi_chandigarh': { sedan_ow:6500,  sedan_rt:10000, ertiga_ow:8500,  ertiga_rt:13000, innova_ow:11000, innova_rt:17000, tempo:'best' },
  'chandigarh_uttarkashi': { sedan_ow:6500,  sedan_rt:10000, ertiga_ow:8500,  ertiga_rt:13000, innova_ow:11000, innova_rt:17000, tempo:'best' },

  // ── DHANAULTI / TEHRI ↔ DELHI / CHANDIGARH ──────────────────
  'dhanaulti_delhi':       { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'delhi_dhanaulti':       { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'dhanaulti_chandigarh':  { sedan_ow:5000,  sedan_rt:8000,  ertiga_ow:6500,  ertiga_rt:10500, innova_ow:8500,  innova_rt:13500, tempo:'best' },
  'chandigarh_dhanaulti':  { sedan_ow:5000,  sedan_rt:8000,  ertiga_ow:6500,  ertiga_rt:10500, innova_ow:8500,  innova_rt:13500, tempo:'best' },
  'tehri_delhi':           { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'delhi_tehri':           { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'tehri_chandigarh':      { sedan_ow:5000,  sedan_rt:8000,  ertiga_ow:6500,  ertiga_rt:10500, innova_ow:8500,  innova_rt:13500, tempo:'best' },
  'chandigarh_tehri':      { sedan_ow:5000,  sedan_rt:8000,  ertiga_ow:6500,  ertiga_rt:10500, innova_ow:8500,  innova_rt:13500, tempo:'best' },
  // Delhi → Airport (Jolly Grant) — fixed intercity price
  'delhi_airport':         { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },

  // ── ISBT / RAILWAY STATION SURCHARGE ROUTES ──────────────────
  // These use dehradun base price + ₹300 surcharge applied in Hero.astro
  // No separate entries needed — handled by normalization fix in Hero.astro

};

// ── LONG ROUTE KEYS (per-day rate shown instead of fixed price) ──
// All destinations beyond 150km from origin
export const longRouteDestinations = new Set([
  'nainital', 'kedarnath', 'badrinath', 'auli', 'corbett',
  'munsiyari', 'shimla', 'manali', 'yamunotri', 'gangotri',
  'chopta', 'lansdowne',
]);

// ── AIRPORT PICKUP ORIGINS (per-day + parking note) ──────────────
// Delhi/Chandigarh airports → Dehradun = per-day rate + parking
export const airportPerDayRoutes = new Set([
  'delhi_airport_dehradun', 'dehradun_delhi_airport',
  'chandigarh_airport_dehradun', 'dehradun_chandigarh_airport',
]);

// ── WITHIN CITY KEYS (show contact us message) ───────────────────
export const withinCityKeys = new Set([
  'dehradun', 'dehradun_station', 'dehradun_isbt',
]);

// ── CUSTOM QUOTE ONLY ─────────────────────────────────────────────
export const customQuoteOnly = new Set(['agra', 'jaipur', 'lucknow']);

// ── LOCATION ALIAS MAP ────────────────────────────────────────────
export const locationMap: Record<string, string> = {
  // Airport — all variants
  'jolly grant airport (ded)':          'airport',
  'jolly grant airport':                'airport',
  'jolly grant airport, dehradun':      'airport',
  'jolly grant airport dehradun':       'airport',
  'jolly grant':                        'airport',
  'dehradun airport':                   'airport',
  'airport dehradun':                   'airport',
  'ded airport':                        'airport',
  'dед':                                'airport',

  // Delhi Airport
  'delhi airport (igi)':                'delhi_airport',
  'delhi airport':                      'delhi_airport',
  'igi airport':                        'delhi_airport',
  'indira gandhi airport':              'delhi_airport',
  'new delhi airport':                  'delhi_airport',

  // Chandigarh Airport
  'chandigarh airport':                 'chandigarh_airport',
  'shaheed bhagat singh airport':       'chandigarh_airport',

  // Dehradun — standard
  'dehradun':                           'dehradun',
  'clock tower, dehradun':              'dehradun',
  'clock tower':                        'dehradun',
  'rajpur road, dehradun':              'dehradun',
  'sahastradhara, dehradun':            'dehradun',
  'fri (forest research institute), dehradun': 'dehradun',
  'fri (forest research institute)':    'dehradun',
  'fri':                                'dehradun',
  'forest research institute':          'dehradun',
  'mindrolling monastery, dehradun':    'dehradun',
  'mindrolling monastery':              'dehradun',
  "robber's cave, dehradun":            'dehradun',
  "robber's cave":                      'dehradun',

  // Dehradun — surcharge locations
  'dehradun railway station':           'dehradun_station',
  'railway station dehradun':           'dehradun_station',
  'ddn railway station':                'dehradun_station',
  'isbt dehradun':                      'dehradun_isbt',
  'isbt':                               'dehradun_isbt',

  // Mussoorie & nearby
  'mussoorie':                          'mussoorie',
  'mall road, mussoorie':               'mussoorie',
  'mall road mussoorie':                'mussoorie',
  'kempty falls':                       'mussoorie',
  'landour':                            'mussoorie',
  'kanatal':                            'dhanaulti',   // same pricing as dhanaulti
  'dhanaulti':                          'dhanaulti',
  'chamba':                             'mussoorie',

  // Haridwar
  'haridwar':                           'haridwar',
  'har ki pauri, haridwar':             'haridwar',
  'har ki pauri':                       'haridwar',
  'haridwar railway station':           'haridwar',
  'chandi devi temple':                 'haridwar',
  'mansa devi temple':                  'haridwar',
  'pauri':                              'haridwar',

  // Rishikesh
  'rishikesh':                          'rishikesh',
  'laxman jhula, rishikesh':            'rishikesh',
  'laxman jhula':                       'rishikesh',
  'ram jhula, rishikesh':               'rishikesh',
  'ram jhula':                          'rishikesh',
  'triveni ghat, rishikesh':            'rishikesh',
  'triveni ghat':                       'rishikesh',
  'tapovan, rishikesh':                 'rishikesh',
  'tapovan':                            'rishikesh',
  'shivpuri (rafting)':                 'rishikesh',
  'shivpuri':                           'rishikesh',

  // Char Dham
  'kedarnath':                          'kedarnath',
  'sonprayag':                          'kedarnath',
  'gaurikund':                          'kedarnath',
  'guptkashi':                          'kedarnath',
  'badrinath':                          'badrinath',
  'joshimath':                          'badrinath',
  'yamunotri':                          'yamunotri',
  'gangotri':                           'gangotri',
  'uttarkashi':                         'uttarkashi',

  // Hill Stations
  'tehri':                              'tehri',
  'new tehri':                          'tehri',
  'lansdowne':                          'lansdowne',
  'shimla':                             'shimla',
  'manali':                             'manali',

  // Adventure
  'auli':                               'auli',
  'chopta':                             'chopta',
  'tungnath':                           'chopta',

  // Kumaon — all map to nainital for pricing
  'nainital':                           'nainital',
  'mall road, nainital':                'nainital',
  'mall road nainital':                 'nainital',
  'bhimtal':                            'nainital',
  'sattal':                             'nainital',
  'naukuchiatal':                       'nainital',
  'kausani':                            'nainital',
  'ranikhet':                           'nainital',
  'almora':                             'nainital',
  'mukteshwar':                         'nainital',
  'binsar':                             'nainital',
  'jim corbett national park':          'corbett',
  'jim corbett':                        'corbett',
  'ramnagar':                           'corbett',

  // Munsiyari
  'munsiyari':                          'munsiyari',
  'pithoragarh':                        'munsiyari',

  // Other Cities
  'new delhi railway station':          'delhi',
  'new delhi':                          'delhi',
  'delhi':                              'delhi',
  'chandigarh':                         'chandigarh',
  'agra':                               'agra',
  'jaipur':                             'jaipur',
  'lucknow':                            'lucknow',
};

// ── SURCHARGE MAP ─────────────────────────────────────────────────
export const surchargeMap: Record<string, number> = {
  'dehradun_station': 300,
  'dehradun_isbt':    300,
};

// ── LOCAL PACKAGE RATES ───────────────────────────────────────────
export const localRates = {
  sedan:     { perDay: 3599, extraKmRate: 12  },
  ertiga:    { perDay: 4499, extraKmRate: 14  },
  innova:    { perDay: 5670, extraKmRate: 18  },
  traveller: { perDay: 'best' as const, extraKmRate: 0 },
  limitKm:   150,
};

// ── ESTIMATED RANGE PER KM (unknown routes) ───────────────────────
export const estimatedRates: Record<string, [number, number]> = {
  sedan:     [15, 18],
  ertiga:    [18, 22],
  innova:    [22, 28],
  traveller: [28, 35],
};

// ── APPROXIMATE DISTANCES FROM DEHRADUN (km) ─────────────────────
export const approxDistances: Record<string, number> = {
  nainital:    295, auli:       280, chopta:    220,
  tehri:        75, lansdowne:  170, corbett:   290,
  kedarnath:   250, badrinath:  320, yamunotri: 192,
  gangotri:    265, shimla:     230, manali:    460,
  uttarkashi:  155, dhanaulti:   65, chandigarh:180,
  delhi:       290, munsiyari:  395, mussoorie:  35,
  haridwar:     54, rishikesh:   46,
};
