export interface TourPackage {
  title: string;
  nights: number;
  highlights: string[];
}

export const packages: TourPackage[] = [
  {
    title: 'Mussoorie Day Trip',
    nights: 0,
    highlights: ['Kempty Falls', 'Mall Road', 'Gun Hill', 'Camel\'s Back Road'],
  },
  {
    title: 'Rishikesh + Haridwar',
    nights: 1,
    highlights: ['Ganga Aarti at Har Ki Pauri', 'Laxman Jhula', 'Beatles Ashram', 'Ram Jhula'],
  },
  {
    title: 'Nainital Weekend',
    nights: 2,
    highlights: ['Naini Lake', 'Naina Devi Temple', 'Tiffin Top', 'Sat Tal'],
  },
  {
    title: 'Char Dham Tour',
    nights: 10,
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
  },
  {
    title: 'Auli Snow Trip',
    nights: 2,
    highlights: ['Cable car ride', 'Skiing slopes', 'Gurson Bugyal trek', 'Nanda Devi views'],
  },
];
