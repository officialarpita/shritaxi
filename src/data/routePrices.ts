// ================================================================
// SHRI TAXI — Route Price Configuration
// ================================================================
// Edit prices HERE only — Hero.astro reads from this file
// After editing: commit to GitHub → Cloudflare auto-rebuilds (~2 min)
// ================================================================

export type VehiclePrice = {
  sedan_ow:  number;
  sedan_rt:  number;
  ertiga_ow: number;
  ertiga_rt: number;
  innova_ow: number;
  innova_rt: number;
  tempo?:    'best' | number;
};

// ── ROUTE PRICES ─────────────────────────────────────────────────
// Key format: 'from_to' (lowercase, underscore-separated)
// OW = One Way, RT = Round Trip
// tempo: 'best' = show "Call for best price"
// ─────────────────────────────────────────────────────────────────

export const routePrices: Record<string, VehiclePrice> = {

  // ── AIRPORT TRANSFERS ─────────────────────────────────────────
  'airport_dehradun':      { sedan_ow:1000,  sedan_rt:1800,  ertiga_ow:1200,  ertiga_rt:2200,  innova_ow:1500,  innova_rt:2800,  tempo:'best' },
  'dehradun_airport':      { sedan_ow:1000,  sedan_rt:1800,  ertiga_ow:1200,  ertiga_rt:2200,  innova_ow:1500,  innova_rt:2800,  tempo:'best' },
  'airport_dehradun_isbt': { sedan_ow:1500,  sedan_rt:2800,  ertiga_ow:2000,  ertiga_rt:3700,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'dehradun_isbt_airport': { sedan_ow:1500,  sedan_rt:2800,  ertiga_ow:2000,  ertiga_rt:3700,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'airport_haridwar':      { sedan_ow:2500,  sedan_rt:4500,  ertiga_ow:3200,  ertiga_rt:5800,  innova_ow:4000,  innova_rt:7200,  tempo:'best' },
  'haridwar_airport':      { sedan_ow:2500,  sedan_rt:4500,  ertiga_ow:3200,  ertiga_rt:5800,  innova_ow:4000,  innova_rt:7200,  tempo:'best' },
  'airport_rishikesh':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'rishikesh_airport':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'airport_mussoorie':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },
  'mussoorie_airport':     { sedan_ow:2200,  sedan_rt:4000,  ertiga_ow:2800,  ertiga_rt:5200,  innova_ow:3500,  innova_rt:6500,  tempo:'best' },

  // ── FROM DEHRADUN ─────────────────────────────────────────────
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
  'dehradun_shimla':       { sedan_ow:5000,  sedan_rt:8500,  ertiga_ow:6500,  ertiga_rt:10500, innova_ow:8500,  innova_rt:14000, tempo:'best' },
  'shimla_dehradun':       { sedan_ow:5000,  sedan_rt:8500,  ertiga_ow:6500,  ertiga_rt:10500, innova_ow:8500,  innova_rt:14000, tempo:'best' },
  'dehradun_nainital':     { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'nainital_dehradun':     { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'dehradun_kedarnath':    { sedan_ow:5000,  sedan_rt:8500,  ertiga_ow:7000,  ertiga_rt:11000, innova_ow:8500,  innova_rt:14000, tempo:'best' },
  'kedarnath_dehradun':    { sedan_ow:5000,  sedan_rt:8500,  ertiga_ow:7000,  ertiga_rt:11000, innova_ow:8500,  innova_rt:14000, tempo:'best' },
  'dehradun_badrinath':    { sedan_ow:6000,  sedan_rt:10000, ertiga_ow:8000,  ertiga_rt:13000, innova_ow:10000, innova_rt:16000, tempo:'best' },
  'badrinath_dehradun':    { sedan_ow:6000,  sedan_rt:10000, ertiga_ow:8000,  ertiga_rt:13000, innova_ow:10000, innova_rt:16000, tempo:'best' },
  'dehradun_auli':         { sedan_ow:6000,  sedan_rt:10000, ertiga_ow:8000,  ertiga_rt:13000, innova_ow:10000, innova_rt:16000, tempo:'best' },
  'auli_dehradun':         { sedan_ow:6000,  sedan_rt:10000, ertiga_ow:8000,  ertiga_rt:13000, innova_ow:10000, innova_rt:16000, tempo:'best' },
  'dehradun_corbett':      { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'corbett_dehradun':      { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'dehradun_manali':       { sedan_ow:9000,  sedan_rt:15000, ertiga_ow:12000, ertiga_rt:19000, innova_ow:15000, innova_rt:24000, tempo:'best' },
  'manali_dehradun':       { sedan_ow:9000,  sedan_rt:15000, ertiga_ow:12000, ertiga_rt:19000, innova_ow:15000, innova_rt:24000, tempo:'best' },
  'dehradun_chandigarh':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_dehradun':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'dehradun_delhi':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_dehradun':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },

  // ── FROM DELHI ────────────────────────────────────────────────
  'delhi_haridwar':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'haridwar_delhi':        { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_rishikesh':       { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'rishikesh_delhi':       { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_mussoorie':       { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'mussoorie_delhi':       { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'delhi_chandigarh':      { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_delhi':      { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'delhi_nainital':        { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'nainital_delhi':        { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'delhi_uttarkashi':      { sedan_ow:8000,  sedan_rt:12000, ertiga_ow:12000, ertiga_rt:17000, innova_ow:15000, innova_rt:21000, tempo:'best' },
  'uttarkashi_delhi':      { sedan_ow:8000,  sedan_rt:12000, ertiga_ow:12000, ertiga_rt:17000, innova_ow:15000, innova_rt:21000, tempo:'best' },
  'delhi_corbett':         { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'corbett_delhi':         { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'delhi_kedarnath':       { sedan_ow:9500,  sedan_rt:15000, ertiga_ow:13000, ertiga_rt:19000, innova_ow:16000, innova_rt:24000, tempo:'best' },
  'kedarnath_delhi':       { sedan_ow:9500,  sedan_rt:15000, ertiga_ow:13000, ertiga_rt:19000, innova_ow:16000, innova_rt:24000, tempo:'best' },
  'delhi_badrinath':       { sedan_ow:10500, sedan_rt:17000, ertiga_ow:14000, ertiga_rt:21000, innova_ow:18000, innova_rt:27000, tempo:'best' },
  'badrinath_delhi':       { sedan_ow:10500, sedan_rt:17000, ertiga_ow:14000, ertiga_rt:21000, innova_ow:18000, innova_rt:27000, tempo:'best' },
  'delhi_auli':            { sedan_ow:10000, sedan_rt:16000, ertiga_ow:13500, ertiga_rt:21000, innova_ow:17000, innova_rt:26000, tempo:'best' },
  'auli_delhi':            { sedan_ow:10000, sedan_rt:16000, ertiga_ow:13500, ertiga_rt:21000, innova_ow:17000, innova_rt:26000, tempo:'best' },

  // ── FROM HARIDWAR ─────────────────────────────────────────────
  'haridwar_rishikesh':    { sedan_ow:1000,  sedan_rt:1600,  ertiga_ow:1200,  ertiga_rt:1900,  innova_ow:1500,  innova_rt:2400  },
  'rishikesh_haridwar':    { sedan_ow:1000,  sedan_rt:1600,  ertiga_ow:1200,  ertiga_rt:1900,  innova_ow:1500,  innova_rt:2400  },
  'haridwar_mussoorie':    { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'mussoorie_haridwar':    { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'haridwar_kedarnath':    { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'kedarnath_haridwar':    { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'haridwar_badrinath':    { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'badrinath_haridwar':    { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'haridwar_nainital':     { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'nainital_haridwar':     { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:6000,  ertiga_rt:9500,  innova_ow:7500,  innova_rt:12000, tempo:'best' },
  'haridwar_corbett':      { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'corbett_haridwar':      { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },

  // ── FROM RISHIKESH ────────────────────────────────────────────
  'rishikesh_mussoorie':   { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'mussoorie_rishikesh':   { sedan_ow:3000,  sedan_rt:5000,  ertiga_ow:4000,  ertiga_rt:6500,  innova_ow:5000,  innova_rt:8000,  tempo:'best' },
  'rishikesh_kedarnath':   { sedan_ow:4000,  sedan_rt:7000,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:7000,  innova_rt:11500, tempo:'best' },
  'kedarnath_rishikesh':   { sedan_ow:4000,  sedan_rt:7000,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:7000,  innova_rt:11500, tempo:'best' },
  'rishikesh_badrinath':   { sedan_ow:4000,  sedan_rt:7000,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:7000,  innova_rt:11500, tempo:'best' },
  'badrinath_rishikesh':   { sedan_ow:4000,  sedan_rt:7000,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:7000,  innova_rt:11500, tempo:'best' },
  'rishikesh_nainital':    { sedan_ow:4000,  sedan_rt:7000,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:7000,  innova_rt:11500, tempo:'best' },
  'nainital_rishikesh':    { sedan_ow:4000,  sedan_rt:7000,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:7000,  innova_rt:11500, tempo:'best' },
  'rishikesh_uttarkashi':  { sedan_ow:3500,  sedan_rt:5500,  ertiga_ow:5000,  ertiga_rt:7500,  innova_ow:6000,  innova_rt:9500,  tempo:'best' },
  'uttarkashi_rishikesh':  { sedan_ow:3500,  sedan_rt:5500,  ertiga_ow:5000,  ertiga_rt:7500,  innova_ow:6000,  innova_rt:9500,  tempo:'best' },

  // ── FROM CHANDIGARH ───────────────────────────────────────────
  'chandigarh_haridwar':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'haridwar_chandigarh':   { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_rishikesh':  { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'rishikesh_chandigarh':  { sedan_ow:3500,  sedan_rt:6000,  ertiga_ow:4500,  ertiga_rt:7500,  innova_ow:5670,  innova_rt:9000,  tempo:'best' },
  'chandigarh_mussoorie':  { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'mussoorie_chandigarh':  { sedan_ow:4500,  sedan_rt:7500,  ertiga_ow:5500,  ertiga_rt:9000,  innova_ow:6670,  innova_rt:11000, tempo:'best' },
  'chandigarh_manali':     { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'manali_chandigarh':     { sedan_ow:5500,  sedan_rt:9000,  ertiga_ow:7000,  ertiga_rt:11500, innova_ow:9000,  innova_rt:14500, tempo:'best' },
  'chandigarh_nainital':   { sedan_ow:6500,  sedan_rt:10500, ertiga_ow:8500,  ertiga_rt:13500, innova_ow:11000, innova_rt:17500, tempo:'best' },
  'nainital_chandigarh':   { sedan_ow:6500,  sedan_rt:10500, ertiga_ow:8500,  ertiga_rt:13500, innova_ow:11000, innova_rt:17500, tempo:'best' },
};

// ── LOCATION ALIAS MAP ────────────────────────────────────────────
// Maps every datalist entry to its route key
// Sub-locations map to parent city key
// Special pickup points (station/ISBT) get their own surcharge key
// ─────────────────────────────────────────────────────────────────

export const locationMap: Record<string, string> = {
  // Airport — extra aliases for common input variations
  'jolly grant airport ded':                     'airport',
  'jolly grant airport, dehradun':               'airport',
  'dehradun airport':                            'airport',
  'airport dehradun':                            'airport',
  'ded airport':                                 'airport',
  'jolly grant':                                 'airport',

  // Dehradun — standard (no surcharge)
  'dehradun':                                    'dehradun',
  'clock tower, dehradun':                       'dehradun',
  'rajpur road, dehradun':                       'dehradun',
  'sahastradhara, dehradun':                     'dehradun',
  'fri (forest research institute), dehradun':   'dehradun',
  'mindrolling monastery, dehradun':             'dehradun',
  "robber's cave, dehradun":                     'dehradun',

  // Dehradun — surcharge locations
  'dehradun railway station':                    'dehradun_station',
  'railway station dehradun':                    'dehradun_station',
  'ddn railway station':                         'dehradun_station',
  'isbt dehradun':                               'dehradun_isbt',

  // Airport
  'jolly grant airport (ded)':                   'airport',
  'jolly grant airport':                         'airport',

  // Mussoorie & nearby
  'mussoorie':                                   'mussoorie',
  'mall road, mussoorie':                        'mussoorie',
  'kempty falls':                                'mussoorie',
  'landour':                                     'mussoorie',
  'dhanaulti':                                   'dhanaulti',
  'kanatal':                                     'mussoorie',
  'chamba':                                      'mussoorie',

  // Haridwar
  'haridwar':                                    'haridwar',
  'har ki pauri, haridwar':                      'haridwar',
  'haridwar railway station':                    'haridwar',
  'chandi devi temple':                          'haridwar',
  'mansa devi temple':                           'haridwar',
  'pauri':                                       'haridwar',

  // Rishikesh
  'rishikesh':                                   'rishikesh',
  'laxman jhula, rishikesh':                     'rishikesh',
  'ram jhula, rishikesh':                        'rishikesh',
  'triveni ghat, rishikesh':                     'rishikesh',
  'tapovan, rishikesh':                          'rishikesh',
  'shivpuri (rafting)':                          'rishikesh',

  // Char Dham
  'kedarnath':                                   'kedarnath',
  'sonprayag':                                   'kedarnath',
  'gaurikund':                                   'kedarnath',
  'guptkashi':                                   'kedarnath',
  'badrinath':                                   'badrinath',
  'joshimath':                                   'badrinath',
  'yamunotri':                                   'yamunotri',
  'gangotri':                                    'gangotri',
  'uttarkashi':                                  'uttarkashi',

  // Hill Stations
  'tehri':                                       'tehri',
  'new tehri':                                   'tehri',
  'lansdowne':                                   'lansdowne',
  'shimla':                                      'shimla',
  'manali':                                      'manali',

  // Adventure
  'auli':                                        'auli',
  'chopta':                                      'chopta',
  'tungnath':                                    'chopta',

  // Kumaon
  'nainital':                                    'nainital',
  'mall road, nainital':                         'nainital',
  'bhimtal':                                     'nainital',
  'sattal':                                      'nainital',
  'naukuchiatal':                                'nainital',
  'kausani':                                     'nainital',
  'ranikhet':                                    'nainital',
  'almora':                                      'nainital',
  'mukteshwar':                                  'nainital',
  'binsar':                                      'nainital',
  'jim corbett national park':                   'corbett',
  'ramnagar':                                    'corbett',

  // Other Cities
  'delhi airport (igi)':                         'delhi',
  'new delhi railway station':                   'delhi',
  'chandigarh':                                  'chandigarh',
  'chandigarh airport':                          'chandigarh',
  'agra':                                        'agra',
  'jaipur':                                      'jaipur',
  'lucknow':                                     'lucknow',
};

// ── SURCHARGE MAP ─────────────────────────────────────────────────
// Extra charge for specific pickup/drop points
// Applies on one-way only — drop surcharge waived on round trips
// ─────────────────────────────────────────────────────────────────

export const surchargeMap: Record<string, number> = {
  'dehradun_station': 300,
  'dehradun_isbt':    300,
};

// ── LOCAL PACKAGE RATES ───────────────────────────────────────────
// Per day rates — includes up to 100km
// ─────────────────────────────────────────────────────────────────

export const localRates = {
  sedan:      { perDay: 3599, extraKmRate: 12  },
  ertiga:     { perDay: 4499, extraKmRate: 14  },
  innova:     { perDay: 5670, extraKmRate: 18  },
  traveller:  { perDay: 'best' as const,  extraKmRate: 0 },
  limitKm:    100,
};

// ── ESTIMATED RANGE PER KM ────────────────────────────────────────
// Used when route is not in routePrices
// Hill routes — higher rate than plains
// ─────────────────────────────────────────────────────────────────

export const estimatedRates: Record<string, [number, number]> = {
  sedan:      [15, 18],
  ertiga:     [18, 22],
  innova:     [22, 28],
  traveller:  [28, 35],
};

// ── APPROXIMATE DISTANCES FROM DEHRADUN (km) ─────────────────────
// Used to estimate price for unknown routes
// ─────────────────────────────────────────────────────────────────

export const approxDistances: Record<string, number> = {
  nainital:    295,
  auli:        280,
  chopta:      220,
  tehri:        75,
  lansdowne:   170,
  corbett:     290,
  kedarnath:   250,
  badrinath:   320,
  yamunotri:   220,
  gangotri:    250,
  shimla:      230,
  manali:      460,
  uttarkashi:  155,
  dhanaulti:    65,
  chandigarh:  180,
  delhi:       290,
};
