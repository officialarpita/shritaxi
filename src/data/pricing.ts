// ── Shri Taxi — Master Pricing Data ──
// Single source of truth for all pricing across the website
// All prices in INR · All inclusive (toll + parking)

export interface PricingTier {
  vehicleId: string;
  vehicleName: string;
  seats: number;
  mrp: number;
  discounted: number;
  saving: number;
  discountPct: number;
}

export interface Transfer {
  id: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  oneWay: number;
  roundTrip: number | null;
  tag: string;
  note: string;
  seoTitle: string;
  seoDesc: string;
  group?: 'dehradun' | 'delhi' | 'chandigarh';
}

export interface TourPackage {
  id: string;
  name: string;
  seoTitle: string;
  seoDesc: string;
  days: number;
  nights: number;
  tag: string;
  badgeColor: string;
  href: string;
  highlights: string[];
  itinerary?: string[];
  includes: string[];
  tiers: PricingTier[];
}

// ── Vehicle base rates ──
export const vehicleRates = {
  sedan:      { id: 'sedan',     name: 'Sedan (Dzire/Baleno)', seats: 4, perDay: 3999, mrpPerDay: 3999  },
  ertiga:     { id: 'ertiga',    name: 'Maruti Ertiga',        seats: 6, perDay: 4999, mrpPerDay: 4999  },
  innova:     { id: 'innova',    name: 'Toyota Innova Crysta', seats: 6, perDay: 6300, mrpPerDay: 6300  },
  traveller:  { id: 'traveller', name: 'Tempo Traveller',      seats: 12, perDay: 8999, mrpPerDay: 8999 },
};

// Helper: build pricing tiers for a package
function tiers(days: number, sedanOverride?: number): PricingTier[] {
  const vehicles = [
    vehicleRates.sedan,
    vehicleRates.ertiga,
    vehicleRates.innova,
    vehicleRates.traveller,
  ];

  return vehicles.map((v, i) => {
    const mrp = v.mrpPerDay * days;
    let discounted = Math.round(mrp * 0.9);

    if (i === 0 && sedanOverride) {
      discounted = sedanOverride;
    } else if (discounted > 50000) {
      discounted = Math.round(discounted / 1000) * 1000 - 1;
    } else if (discounted > 10000) {
      discounted = Math.round(discounted / 100) * 100 - 1;
    } else if (discounted > 5000) {
      discounted = Math.round(discounted / 100) * 100 - 1;
    }

    return {
      vehicleId: v.id,
      vehicleName: v.name,
      seats: v.seats,
      mrp,
      discounted,
      saving: mrp - discounted,
      discountPct: 10,
    };
  });
}

export function fmt(n: number): string {
  return '₹' + n.toLocaleString('en-IN');
}

// ── Transfer pricing by vehicle ──
export const transferRates = {
  // Dehradun local transfers
  dehradunLocal: { sedan: 1500, ertiga: 2000, innova: 2500, traveller: 4000 },
  // Dehradun ↔ Haridwar/Rishikesh
  dehradunHaridwar: { sedan: 2000, ertiga: 2500, innova: 3200, traveller: 5000 },
  // Dehradun ↔ Delhi / Chandigarh
  dehradunDelhi: { sedan: 3500, ertiga: 4500, innova: 5670, traveller: 8000 },
  // Dehradun → Mussoorie (day trip rate)
  dehradunMussoorie: { sedan: 1500, ertiga: 2000, innova: 2500, traveller: 4000 },
  // Delhi → Mussoorie (extra ₹1,000 per vehicle)
  delhiMussoorie: { sedan: 4500, ertiga: 5500, innova: 6670, traveller: 9000 },
  // Dehradun → Dhanaulti/Tehri/Chakrata (per day rate)
  dehradunDayTrip: { sedan: 3599, ertiga: 4499, innova: 5670, traveller: 8000 },
};

// ── Short Transfers ──
export const transfers: Transfer[] = [
  // ── From Dehradun ──
  {
    id: 'jolly-grant-airport',
    from: 'Jolly Grant Airport',
    to: 'Dehradun',
    distance: '27 km',
    duration: '45 min',
    oneWay: 1000,
    roundTrip: null,
    tag: 'Airport',
    note: 'All inclusive · Flight tracking · 24/7',
    seoTitle: 'Jolly Grant Airport Taxi to Dehradun | ₹1,000 Fixed Fare',
    seoDesc: 'Book reliable airport taxi from Jolly Grant Airport (DED) to Dehradun at ₹1,000 fixed fare. 24/7 available, flight tracking, no hidden charges.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-mussoorie',
    from: 'Dehradun',
    to: 'Mussoorie',
    distance: '35 km',
    duration: '1 hr 30 min',
    oneWay: 1500,
    roundTrip: 3500,
    tag: 'Hill Station',
    note: 'All inclusive · Starting price',
    seoTitle: 'Dehradun to Mussoorie Taxi | ₹1,500 One Way | ₹3,500 Round Trip',
    seoDesc: 'Book taxi from Dehradun to Mussoorie at ₹1,500 one way or ₹3,500 round trip. Fixed price, experienced hill drivers, all inclusive.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-haridwar',
    from: 'Dehradun',
    to: 'Haridwar',
    distance: '54 km',
    duration: '1 hr 30 min',
    oneWay: 2000,
    roundTrip: 3500,
    tag: 'Spiritual',
    note: 'All inclusive · Starting price',
    seoTitle: 'Dehradun to Haridwar Taxi | ₹2,000 One Way | ₹3,500 Round Trip',
    seoDesc: 'Book taxi from Dehradun to Haridwar at ₹2,000 one way. Fixed price cab for Har Ki Pauri, Ganga Aarti. All inclusive, no hidden charges.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-rishikesh',
    from: 'Dehradun',
    to: 'Rishikesh',
    distance: '46 km',
    duration: '1 hr 15 min',
    oneWay: 2000,
    roundTrip: 3500,
    tag: 'Adventure',
    note: 'All inclusive · Starting price',
    seoTitle: 'Dehradun to Rishikesh Taxi | ₹2,000 One Way | ₹3,500 Round Trip',
    seoDesc: 'Book taxi from Dehradun to Rishikesh at ₹2,000 one way. Fixed price for Laxman Jhula, Ram Jhula, rafting. All inclusive.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-dhanaulti',
    from: 'Dehradun',
    to: 'Dhanaulti & Kanatal',
    distance: '65 km',
    duration: '2 hrs',
    oneWay: 3599,
    roundTrip: null,
    tag: 'Day Trip',
    note: 'All inclusive · Starting price',
    seoTitle: 'Dehradun to Dhanaulti Taxi | ₹3,599 | Kanatal Day Trip',
    seoDesc: 'Book taxi from Dehradun to Dhanaulti & Kanatal. Day trip starting ₹3,599. Surkanda Devi Temple, Eco Park, Kanatal. All inclusive.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-tehri',
    from: 'Dehradun',
    to: 'Tehri',
    distance: '75 km',
    duration: '2 hrs 30 min',
    oneWay: 3599,
    roundTrip: null,
    tag: 'Day Trip',
    note: 'All inclusive · Tehri Dam visit',
    seoTitle: 'Dehradun to Tehri Taxi | ₹3,599 | Tehri Dam Day Trip',
    seoDesc: 'Book taxi from Dehradun to Tehri dam. Day trip starting ₹3,599. Asia\'s largest dam, Tehri Lake, water sports. All inclusive.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-chakrata',
    from: 'Dehradun',
    to: 'Chakrata',
    distance: '90 km',
    duration: '3 hrs',
    oneWay: 3599,
    roundTrip: null,
    tag: 'Day Trip',
    note: 'All inclusive · Starting price',
    seoTitle: 'Dehradun to Chakrata Taxi | ₹3,599 | Day Trip',
    seoDesc: 'Book taxi from Dehradun to Chakrata. Day trip starting ₹3,599. Tiger Falls, Chilmiri Neck viewpoint. All inclusive.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-delhi',
    from: 'Dehradun',
    to: 'Delhi NCR',
    distance: '310 km',
    duration: '6 hrs',
    oneWay: 3500,
    roundTrip: 7000,
    tag: 'Outstation',
    note: 'All inclusive · Toll included',
    seoTitle: 'Dehradun to Delhi Taxi | ₹3,500 One Way | ₹7,000 Round Trip',
    seoDesc: 'Book outstation taxi from Dehradun to Delhi NCR at ₹3,500 one way. Toll included, experienced drivers, comfortable journey.',
    group: 'dehradun',
  },
  {
    id: 'dehradun-chandigarh',
    from: 'Dehradun',
    to: 'Chandigarh',
    distance: '280 km',
    duration: '5 hrs',
    oneWay: 3500,
    roundTrip: 7000,
    tag: 'Outstation',
    note: 'All inclusive · Toll included',
    seoTitle: 'Dehradun to Chandigarh Taxi | ₹3,500 One Way',
    seoDesc: 'Book outstation taxi from Dehradun to Chandigarh at ₹3,500 one way. Toll included, experienced drivers.',
    group: 'dehradun',
  },

  // ── From Delhi ──
  {
    id: 'delhi-dehradun',
    from: 'Delhi NCR',
    to: 'Dehradun',
    distance: '310 km',
    duration: '6 hrs',
    oneWay: 3500,
    roundTrip: 7000,
    tag: 'Outstation',
    note: 'All inclusive · Toll included',
    seoTitle: 'Delhi to Dehradun Taxi | ₹3,500 One Way | Fixed Price',
    seoDesc: 'Book taxi from Delhi to Dehradun at ₹3,500 one way. Fixed price, toll included, experienced drivers. Book online or WhatsApp.',
    group: 'delhi',
  },
  {
    id: 'delhi-haridwar',
    from: 'Delhi NCR',
    to: 'Haridwar',
    distance: '230 km',
    duration: '5 hrs',
    oneWay: 3500,
    roundTrip: 7000,
    tag: 'Spiritual',
    note: 'All inclusive · Toll included',
    seoTitle: 'Delhi to Haridwar Taxi | ₹3,500 One Way | Fixed Price',
    seoDesc: 'Book taxi from Delhi to Haridwar at ₹3,500 one way. Fixed price cab for Har Ki Pauri, Ganga Aarti. All inclusive.',
    group: 'delhi',
  },
  {
    id: 'delhi-rishikesh',
    from: 'Delhi NCR',
    to: 'Rishikesh',
    distance: '260 km',
    duration: '5 hrs 30 min',
    oneWay: 3500,
    roundTrip: 7000,
    tag: 'Adventure',
    note: 'All inclusive · Toll included',
    seoTitle: 'Delhi to Rishikesh Taxi | ₹3,500 One Way | Fixed Price',
    seoDesc: 'Book taxi from Delhi to Rishikesh at ₹3,500 one way. Fixed price for Laxman Jhula, rafting, yoga. All inclusive.',
    group: 'delhi',
  },
  {
    id: 'delhi-mussoorie',
    from: 'Delhi NCR',
    to: 'Mussoorie',
    distance: '290 km',
    duration: '6 hrs',
    oneWay: 4500,
    roundTrip: 9000,
    tag: 'Hill Station',
    note: 'All inclusive · Toll included',
    seoTitle: 'Delhi to Mussoorie Taxi | ₹4,500 One Way | Fixed Price',
    seoDesc: 'Book taxi from Delhi to Mussoorie at ₹4,500 one way. Queen of Hills, Mall Road, Kempty Falls. All inclusive fixed price.',
    group: 'delhi',
  },

  // ── From Chandigarh ──
  {
    id: 'chandigarh-dehradun',
    from: 'Chandigarh',
    to: 'Dehradun',
    distance: '280 km',
    duration: '5 hrs',
    oneWay: 3500,
    roundTrip: 7000,
    tag: 'Outstation',
    note: 'All inclusive · Toll included',
    seoTitle: 'Chandigarh to Dehradun Taxi | ₹3,500 One Way | Fixed Price',
    seoDesc: 'Book taxi from Chandigarh to Dehradun at ₹3,500 one way. Fixed price, toll included, experienced drivers.',
    group: 'chandigarh',
  },
];

// Haridwar + Rishikesh same day combo
export const haridwarRishikeshCombo = {
  sedan:      { price: 3499, mrp: 3999 },
  ertiga:     { price: 4499, mrp: 4999 },
  innova:     { price: 5800, mrp: 6300 },
  traveller:  { price: 8000, mrp: 8999 },
};

// ── Delhi Char Dham pricing (+₹6,000 on Dehradun rate) ──
export function delhiCharDhamTiers(dehradunTiers: PricingTier[]): PricingTier[] {
  return dehradunTiers.map(t => ({
    ...t,
    mrp: t.mrp + 6000,
    discounted: t.discounted + 6000,
    saving: t.mrp + 6000 - (t.discounted + 6000),
  }));
}

// ── Tour Packages ──
export const tourPackages: TourPackage[] = [
  {
    id: 'dhanaulti',
    name: 'Dhanaulti & Kanatal Day Trip',
    seoTitle: 'Dhanaulti Day Trip Taxi from Dehradun | ₹3,599 | Kanatal & Surkanda Devi',
    seoDesc: 'Book cab for Dhanaulti & Kanatal day trip from Dehradun. Starting ₹3,599. Surkanda Devi Temple, Eco Park, Kanatal. All inclusive.',
    days: 1,
    nights: 0,
    tag: 'Day Trip',
    badgeColor: '#0d9488',
    href: '/packages#dhanaulti',
    highlights: ['Dhanaulti Eco Park', 'Surkanda Devi Temple', 'Kanatal Village', 'Snow View Point'],
    itinerary: ['Morning: Depart Dehradun', 'Dhanaulti Eco Park', 'Surkanda Devi Temple', 'Kanatal → Return'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(1),
  },
  {
    id: 'neem-karoli',
    name: 'Neem Karoli Baba Ashram Trip',
    seoTitle: 'Neem Karoli Baba Kainchi Dham Taxi | 2 Days from Dehradun',
    seoDesc: 'Visit Kainchi Dham Ashram of Neem Karoli Baba from Dehradun. 2 day spiritual trip starting ₹7,199. All inclusive cab package.',
    days: 2,
    nights: 1,
    tag: 'Spiritual',
    badgeColor: '#8b5cf6',
    href: '/packages#neem-karoli',
    highlights: ['Kainchi Dham Ashram', 'Bhowali Market', 'Nainital Lake', 'Naukuchiatal'],
    itinerary: ['Day 1: Dehradun → Kainchi Dham → Bhowali', 'Day 2: Nainital sightseeing → Return Dehradun'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(2),
  },
  {
    id: 'nainital',
    name: 'Nainital Tour Package',
    seoTitle: 'Nainital Tour Package with Cab from Dehradun | 3 Days ₹10,999',
    seoDesc: 'Book 3 day Nainital tour package with cab from Dehradun starting ₹10,999. Naini Lake, Mall Road, Naina Devi Temple. All inclusive.',
    days: 3,
    nights: 2,
    tag: 'Family Favourite',
    badgeColor: '#0d9488',
    href: '/packages/nainital',
    highlights: ['Naini Lake Boating', 'Mall Road Shopping', 'Naina Devi Temple', 'Tiffin Top', 'Sat Tal', 'Snow View Point'],
    itinerary: ['Day 1: Dehradun → Nainital', 'Day 2: Local sightseeing', 'Day 3: Return Dehradun'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(3, 10999),
  },
  {
    id: 'auli',
    name: 'Auli Snow Trip Package',
    seoTitle: 'Auli Snow Trip Package from Dehradun | 3 Days ₹10,999',
    seoDesc: 'Book 3 day Auli snow trip with cab from Dehradun starting ₹10,999. Skiing, cable car, Gorson Bugyal. All inclusive package.',
    days: 3,
    nights: 2,
    tag: 'Adventure',
    badgeColor: '#3b82f6',
    href: '/packages#auli',
    highlights: ['Auli Skiing Slopes', 'Gondola Cable Car', 'Gorson Bugyal Trek', 'Nanda Devi Views', 'Joshimath'],
    itinerary: ['Day 1: Dehradun → Joshimath → Auli', 'Day 2: Skiing & cable car', 'Day 3: Return Dehradun'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(3, 10999),
  },
  {
    id: 'munsiyari',
    name: 'Munsiyari Panchuli Tour Package',
    seoTitle: 'Munsiyari Panchuli Tour Package from Dehradun | 3 Days ₹10,999',
    seoDesc: 'Book Munsiyari Panchuli tour package with cab from Dehradun starting ₹10,999. Panchuli peaks view, Khaliya Top trek, Nanda Devi views. All inclusive.',
    days: 3,
    nights: 2,
    tag: 'Adventure',
    badgeColor: '#3b82f6',
    href: '/packages#munsiyari',
    highlights: ['Panchuli Peaks View', 'Munsiyari Hill Station', 'Khaliya Top Trek', 'Nanda Devi Views', 'Pithoragarh Fort'],
    itinerary: ['Day 1: Dehradun → Pithoragarh', 'Day 2: Pithoragarh → Munsiyari', 'Day 3: Munsiyari → Return'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(3, 10999),
  },
  {
    id: 'chopta',
    name: 'Chopta Tungnath Package',
    seoTitle: 'Chopta Tungnath Trek Taxi Package from Dehradun | 2 Days ₹7,199',
    seoDesc: 'Book Chopta Tungnath trek cab from Dehradun starting ₹7,199. Chandrashila summit, Deoria Tal, Ukhimath. All inclusive 2 day package.',
    days: 2,
    nights: 1,
    tag: 'Trek',
    badgeColor: '#10b981',
    href: '/packages#chopta',
    highlights: ['Tungnath Temple', 'Chandrashila Summit', 'Deoria Tal Lake', 'Ukhimath Village'],
    itinerary: ['Day 1: Dehradun → Chopta via Ukhimath', 'Day 2: Tungnath trek → Return Dehradun'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(2),
  },
  {
    id: 'kedarnath',
    name: 'Kedarnath Yatra Package',
    seoTitle: 'Kedarnath Taxi Package from Dehradun | 3 Days ₹10,999',
    seoDesc: 'Book Kedarnath Yatra cab package from Dehradun starting ₹10,999. Sonprayag, Gaurikund, Kedarnath Temple. All inclusive.',
    days: 3,
    nights: 2,
    tag: 'Pilgrimage',
    badgeColor: '#f59e0b',
    href: '/char-dham-yatra#kedarnath',
    highlights: ['Kedarnath Temple', 'Sonprayag Base Camp', 'Gaurikund', 'Triyuginarayan Temple'],
    itinerary: ['Day 1: Dehradun → Sonprayag', 'Day 2: Kedarnath darshan', 'Day 3: Return Dehradun'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(3, 10999),
  },
  {
    id: 'badrinath',
    name: 'Badrinath Yatra Package',
    seoTitle: 'Badrinath Taxi Package from Dehradun | 3 Days ₹10,999',
    seoDesc: 'Book Badrinath Yatra cab from Dehradun starting ₹10,999. Badrinath Temple, Mana Village, Vasudhara Falls. All inclusive.',
    days: 3,
    nights: 2,
    tag: 'Pilgrimage',
    badgeColor: '#f59e0b',
    href: '/char-dham-yatra#badrinath',
    highlights: ['Badrinath Temple', 'Mana Village', 'Vasudhara Falls', 'Tapt Kund', 'Brahma Kapal'],
    itinerary: ['Day 1: Dehradun → Joshimath', 'Day 2: Badrinath darshan', 'Day 3: Return Dehradun'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(3, 10999),
  },
  {
    id: 'ek-dham',
    name: 'Ek Dham Yatra',
    seoTitle: 'Ek Dham Yatra Taxi Package 2026 | 3 Days from ₹10,999',
    seoDesc: 'Book Ek Dham Yatra cab from Dehradun. Choose any 1 dham — Kedarnath, Badrinath, Yamunotri or Gangotri. 3 days from ₹10,999.',
    days: 3,
    nights: 2,
    tag: 'Char Dham',
    badgeColor: '#fb923c',
    href: '/char-dham-yatra#ek-dham',
    highlights: ['Choice of 1 Dham', 'Kedarnath OR Badrinath', 'OR Yamunotri OR Gangotri', 'Flexible itinerary'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(3, 10999),
  },
  {
    id: 'do-dham',
    name: 'Do Dham Yatra',
    seoTitle: 'Do Dham Yatra Taxi Package 2026 | 5 Days from ₹17,999',
    seoDesc: 'Book Do Dham Yatra cab from Dehradun. Kedarnath + Badrinath or Yamunotri + Gangotri. 5 days starting ₹17,999. All inclusive.',
    days: 5,
    nights: 4,
    tag: 'Char Dham',
    badgeColor: '#fb923c',
    href: '/char-dham-yatra#do-dham',
    highlights: ['Kedarnath + Badrinath', 'OR Yamunotri + Gangotri', 'Scenic Himalayan Routes', 'Expert Hill Drivers'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    tiers: tiers(5),
  },
  {
    id: 'char-dham',
    name: 'Char Dham Yatra 2026',
    seoTitle: 'Char Dham Yatra Taxi Package 2026 | 10 Days from ₹35,999',
    seoDesc: 'Book Char Dham Yatra cab from Dehradun 2026. Yamunotri, Gangotri, Kedarnath, Badrinath. 10 days from ₹35,999. All inclusive.',
    days: 10,
    nights: 9,
    tag: 'Most Popular',
    badgeColor: '#fb923c',
    href: '/char-dham-yatra',
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath', 'Complete Circuit', 'Expert Pahadi Drivers'],
    itinerary: [
      'Day 1-2: Dehradun → Yamunotri',
      'Day 3-4: Yamunotri → Gangotri',
      'Day 5-6: Gangotri → Kedarnath',
      'Day 7-8: Kedarnath → Badrinath',
      'Day 9-10: Badrinath → Return Dehradun',
    ],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes', '24/7 support'],
    tiers: tiers(10),
  },

  // ── Multi-Destination Circuit Packages ──
  {
    id: 'nainital-corbett',
    name: 'Nainital & Jim Corbett Package',
    seoTitle: 'Nainital Corbett Tour Package from Delhi | 5 Days ₹17,999 | Shri Taxi',
    seoDesc: 'Book Nainital & Jim Corbett tour package from Delhi starting ₹17,999 (5 days, Sedan). Naini Lake, Corbett safari, Bhimtal. Cab only, all inclusive.',
    days: 5,
    nights: 4,
    tag: 'Wildlife',
    badgeColor: '#16a34a',
    href: '/packages#nainital-corbett',
    highlights: ['Naini Lake Boating', 'Jim Corbett Safari', 'Bhimtal Lake', 'Snow View Point', 'Corbett Museum'],
    itinerary: ['Day 1: Delhi → Nainital', 'Day 2: Nainital sightseeing', 'Day 3: Bhimtal Lakes → Corbett', 'Day 4: Jim Corbett Safari', 'Day 5: Return Delhi'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    excludes: ['Air fare / Train fare throughout the tour', 'Hotel / Accommodation charges', 'All meals (breakfast, lunch, dinner)', 'Personal expenses (laundry, telephone, tips, porterage)', 'Entrance fees & video camera permits', 'Jungle safari in Corbett National Park', 'Local guide / escort charges', 'Travel insurance', 'Any extra vehicle usage beyond itinerary', 'Peak season surcharge (if applicable)', 'Medical expenses', 'Any cost due to natural calamities, landslides, road blockage or political disturbances', 'Any increase in taxes or fuel prices prior to departure'],
    tiers: tiers(5),
  },
  {
    id: 'mussoorie-corbett-nainital-ranikhet',
    name: 'Mussoorie Corbett Nainital Ranikhet Tour',
    seoTitle: 'Mussoorie Corbett Nainital Ranikhet Package from Delhi | 8 Days ₹28,799',
    seoDesc: 'Book Mussoorie, Jim Corbett, Nainital & Ranikhet tour from Delhi starting ₹28,799 (8 days, Sedan). Complete Uttarakhand circuit. Cab only.',
    days: 8,
    nights: 7,
    tag: 'Uttarakhand Circuit',
    badgeColor: '#0d9488',
    href: '/packages#mussoorie-corbett-nainital-ranikhet',
    highlights: ['Mussoorie Mall Road', 'Jim Corbett Safari', 'Naini Lake', 'Ranikhet Hills', 'Kempty Falls', 'Bhimtal Lakes'],
    itinerary: ['Day 1: Delhi → Mussoorie', 'Day 2: Mussoorie sightseeing', 'Day 3: Mussoorie → Ranikhet', 'Day 4: Ranikhet → Nainital', 'Day 5: Nainital sightseeing', 'Day 6: Bhimtal → Corbett', 'Day 7: Jim Corbett Safari', 'Day 8: Return Delhi'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    excludes: ['Air fare / Train fare throughout the tour', 'Hotel / Accommodation charges', 'All meals (breakfast, lunch, dinner)', 'Personal expenses (laundry, telephone, tips, porterage)', 'Entrance fees & video camera permits', 'Jungle safari in Corbett National Park', 'Local guide / escort charges', 'Travel insurance', 'Any extra vehicle usage beyond itinerary', 'Peak season surcharge (if applicable)', 'Medical expenses', 'Any cost due to natural calamities, landslides, road blockage or political disturbances', 'Any increase in taxes or fuel prices prior to departure'],
    tiers: tiers(8),
  },
  {
    id: 'nainital-ranikhet-corbett',
    name: 'Nainital Ranikhet Corbett Tour',
    seoTitle: 'Nainital Ranikhet Corbett Package from Delhi | 6 Days ₹21,599 | Shri Taxi',
    seoDesc: 'Book Nainital, Ranikhet & Jim Corbett tour from Delhi starting ₹21,599 (6 days, Sedan). Hill stations + wildlife. Cab only, all inclusive.',
    days: 6,
    nights: 5,
    tag: 'Hills + Wildlife',
    badgeColor: '#3b82f6',
    href: '/packages#nainital-ranikhet-corbett',
    highlights: ['Naini Lake', 'Ranikhet Cantonment', 'Jim Corbett Safari', 'Chaubatia Gardens', 'Bhimtal Lakes'],
    itinerary: ['Day 1: Delhi → Nainital', 'Day 2: Nainital sightseeing', 'Day 3: Nainital → Ranikhet', 'Day 4: Ranikhet → Corbett', 'Day 5: Jim Corbett Safari', 'Day 6: Return Delhi'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    excludes: ['Air fare / Train fare throughout the tour', 'Hotel / Accommodation charges', 'All meals (breakfast, lunch, dinner)', 'Personal expenses (laundry, telephone, tips, porterage)', 'Entrance fees & video camera permits', 'Jungle safari in Corbett National Park', 'Local guide / escort charges', 'Travel insurance', 'Any extra vehicle usage beyond itinerary', 'Peak season surcharge (if applicable)', 'Medical expenses', 'Any cost due to natural calamities, landslides, road blockage or political disturbances', 'Any increase in taxes or fuel prices prior to departure'],
    tiers: tiers(6),
  },
  {
    id: 'almora-kausani',
    name: 'Nainital Almora Kausani Ranikhet Corbett Tour',
    seoTitle: 'Almora Kausani Tour Package from Delhi | 8 Days ₹28,799 | Shri Taxi',
    seoDesc: 'Book Nainital, Almora, Kausani, Ranikhet & Corbett tour from Delhi starting ₹28,799 (8 days). Complete Kumaon circuit. Cab only, all inclusive.',
    days: 8,
    nights: 7,
    tag: 'Kumaon Circuit',
    badgeColor: '#f59e0b',
    href: '/packages#almora-kausani',
    highlights: ['Kausani Himalayan Views', 'Almora Temples', 'Naini Lake', 'Ranikhet Hills', 'Jim Corbett Safari', 'Binsar Wildlife'],
    itinerary: ['Day 1: Delhi → Nainital', 'Day 2: Nainital sightseeing', 'Day 3: Nainital → Almora', 'Day 4: Almora → Kausani', 'Day 5: Kausani → Ranikhet', 'Day 6: Ranikhet → Corbett', 'Day 7: Jim Corbett Safari', 'Day 8: Return Delhi'],
    includes: ['Cab with experienced driver', 'Fuel charges', 'Toll & parking', 'All taxes'],
    excludes: ['Air fare / Train fare throughout the tour', 'Hotel / Accommodation charges', 'All meals (breakfast, lunch, dinner)', 'Personal expenses (laundry, telephone, tips, porterage)', 'Entrance fees & video camera permits', 'Jungle safari in Corbett National Park', 'Local guide / escort charges', 'Travel insurance', 'Any extra vehicle usage beyond itinerary', 'Peak season surcharge (if applicable)', 'Medical expenses', 'Any cost due to natural calamities, landslides, road blockage or political disturbances', 'Any increase in taxes or fuel prices prior to departure'],
    tiers: tiers(8),
  },
];
// Single source of truth for all pricing across the website
// All prices in INR · All inclusive (toll + parking)

