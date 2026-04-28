import type { ImageMetadata } from 'astro';
import dzireImg from '../assets/images/Dzire.png';
import crystaImg from '../assets/images/Crysta.png';
import balenoImg from '../assets/images/Baleno.png';
import travellerImg from '../assets/images/Traveller.png';

export interface Vehicle {
  id: string;
  name: string;
  segment: string;
  seats: number;
  luggage: string;
  bestFor: string;
  image: ImageMetadata;
}

export const fleet: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Maruti Dzire',
    segment: 'Sedan',
    seats: 4,
    luggage: '2 large bags',
    bestFor: 'City rides and short airport transfers',
    image: dzireImg,
  },
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    segment: 'SUV',
    seats: 6,
    luggage: '4 large bags',
    bestFor: 'Family trips, Char Dham, long tours',
    image: crystaImg,
  },
  {
    id: 'baleno',
    name: 'Maruti Baleno',
    segment: 'Hatchback',
    seats: 4,
    luggage: '2 large bags',
    bestFor: 'City + airport runs, light luggage',
    image: balenoImg,
  },
  {
    id: 'traveller',
    name: 'Tempo Traveller',
    segment: 'Mini-coach',
    seats: 12,
    luggage: '10+ bags',
    bestFor: 'Group tours, weddings, office outings',
    image: travellerImg,
  },
];

export const vehicleOptions = fleet.map((v) => ({ value: v.id, label: `${v.name} (${v.segment})` }));
