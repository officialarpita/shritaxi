import type { ImageMetadata } from 'astro';
import mussoorieImg from '../assets/images/Mussori2.jpeg';
import rishikeshImg from '../assets/images/Hrisikesh2.jpeg';
import nainitalImg from '../assets/images/Nainital.jpeg';
import charDhamImg from '../assets/images/CharDham2.jpeg';

export interface TourPackage {
  title: string;
  nights: number;
  highlights: string[];
  image?: ImageMetadata;
}

export const packages: TourPackage[] = [
  {
    title: 'Mussoorie Day Trip',
    nights: 0,
    highlights: ['Kempty Falls', 'Mall Road', 'Gun Hill', 'Camel\'s Back Road'],
    image: mussoorieImg,
  },
  {
    title: 'Rishikesh + Haridwar',
    nights: 1,
    highlights: ['Ganga Aarti at Har Ki Pauri', 'Laxman Jhula', 'Beatles Ashram', 'Ram Jhula'],
    image: rishikeshImg,
  },
  {
    title: 'Nainital Weekend',
    nights: 2,
    highlights: ['Naini Lake', 'Naina Devi Temple', 'Tiffin Top', 'Sat Tal'],
    image: nainitalImg,
  },
  {
    title: 'Char Dham Tour',
    nights: 10,
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    image: charDhamImg,
    href: '/char-dham-yatra',
  },
  {
    title: 'Auli Snow Trip',
    nights: 2,
    highlights: ['Cable car ride', 'Skiing slopes', 'Gurson Bugyal trek', 'Nanda Devi views'],
  },
];
