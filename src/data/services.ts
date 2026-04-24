export interface Service {
  title: string;
  blurb: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: 'Dehradun Local Taxi',
    blurb: 'Hourly and full-day rentals inside Dehradun — shopping, meetings, hospital visits.',
    icon: '🚕',
  },
  {
    title: 'Airport Transfer',
    blurb: 'Jolly Grant Airport (DED) pickups and drops, 24/7 with flight tracking.',
    icon: '✈️',
  },
  {
    title: 'Outstation Cab',
    blurb: 'One-way and round-trip outstation cabs across North India.',
    icon: '🛣️',
  },
  {
    title: 'Hill Station Taxi',
    blurb: 'Experienced hill drivers for Mussoorie, Dhanaulti, Chakrata, Chopta, Auli.',
    icon: '⛰️',
  },
  {
    title: 'Char Dham Yatra Taxi',
    blurb: 'Multi-day packages covering Kedarnath, Badrinath, Gangotri, Yamunotri.',
    icon: '🕉️',
  },
  {
    title: 'Haridwar & Rishikesh Cabs',
    blurb: 'Direct cabs to Har Ki Pauri, Laxman Jhula, rafting camps, Beatles Ashram.',
    icon: '🛕',
  },
  {
    title: 'Corporate Travel',
    blurb: 'Monthly billing for regular corporate pickups, site visits, staff transport.',
    icon: '🏢',
  },
  {
    title: 'Tourist Packages',
    blurb: 'Curated weekend and multi-day tour packages with driver-cum-guide.',
    icon: '🧳',
  },
];
