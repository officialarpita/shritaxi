import type { ImageMetadata } from 'astro';
import mussoorieImg from '../assets/images/Mussori2.jpeg';
import rishikeshImg from '../assets/images/Hrisikesh2.jpeg';
import nainitalImg from '../assets/images/Nainital.jpeg';
import charDhamImg from '../assets/images/CharDham2.jpeg';
// NOTE: Add an Auli image to src/assets/images/ and import it below
// import auliImg from '../assets/images/Auli.jpeg';

export interface TourPackage {
  title: string;
  nights: number;
  highlights: string[];
  image?: ImageMetadata;
  href: string;        // all packages now have a dedicated page/section link
  ctaLabel: string;   // custom CTA label per package
}

export const packages: TourPackage[] = [
  {
    title: 'Mussoorie Day Trip',
    nights: 0,
    highlights: ['Kempty Falls', 'Mall Road', 'Gun Hill', "Camel's Back Road"],
    image: mussoorieImg,
    href: '/packages#mussoorie',
    ctaLabel: 'View Package →',
  },
  {
    title: 'Rishikesh + Haridwar',
    nights: 1,
    highlights: ['Ganga Aarti at Har Ki Pauri', 'Laxman Jhula', 'Beatles Ashram', 'Ram Jhula'],
    image: rishikeshImg,
    href: '/packages#rishikesh',
    ctaLabel: 'View Package →',
  },
  {
    title: 'Nainital Weekend',
    nights: 2,
    highlights: ['Naini Lake', 'Naina Devi Temple', 'Tiffin Top', 'Sat Tal'],
    image: nainitalImg,
    href: '/packages#nainital',
    ctaLabel: 'View Package →',
  },
  {
    title: 'Char Dham Tour',
    nights: 10,
    highlights: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
    image: charDhamImg,
    href: '/char-dham-yatra',
    ctaLabel: 'View Full Package →',
  },
  {
    title: 'Auli Snow Trip',
    nights: 2,
    highlights: ['Cable car ride', 'Skiing slopes', 'Gurson Bugyal trek', 'Nanda Devi views'],
    // image: auliImg, // ← uncomment once you add Auli.jpeg to assets/images/
    href: '/packages#auli',
    ctaLabel: 'View Package →',
  },
];
