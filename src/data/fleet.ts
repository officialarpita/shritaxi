import type { ImageMetadata } from 'astro';
import dzireImg     from '../assets/images/Dzire.png';
import ertigaImg    from '../assets/images/Ertiga.jpg';
import crystaImg    from '../assets/images/Crysta.png';
import travellerImg from '../assets/images/Traveller.png';

export interface Vehicle {
  id: string;
  name: string;
  segment: string;
  seats: number;
  luggage: string;
  bestFor: string;
  mrpPerDay: number;
  perDay: number;
  image: ImageMetadata;
  icon: string;
}

export const fleet: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Sedan (Dzire / Baleno)',
    segment: 'Sedan',
    seats: 4,
    luggage: '2 large bags',
    bestFor: 'City rides, day trips and short hill station tours',
    mrpPerDay: 3999,
    perDay: 3599,
    image: dzireImg,
    icon: '🚗',
  },
  {
    id: 'ertiga',
    name: 'Maruti Ertiga',
    segment: 'MPV',
    seats: 6,
    luggage: '3 large bags',
    bestFor: 'Family trips, group travel and comfortable long tours',
    mrpPerDay: 4999,
    perDay: 4499,
    image: ertigaImg,
    icon: '🚐',
  },
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    segment: 'SUV',
    seats: 6,
    luggage: '4 large bags',
    bestFor: 'Premium family trips, Char Dham Yatra and long hill tours',
    mrpPerDay: 6300,
    perDay: 5670,
    image: crystaImg,
    icon: '🚙',
  },
  {
    id: 'traveller',
    name: 'Tempo Traveller',
    segment: 'Mini-coach',
    seats: 12,
    luggage: '10+ bags',
    bestFor: 'Group pilgrimages, corporate outings and large family tours',
    mrpPerDay: 8999,
    perDay: 8000,
    image: travellerImg,
    icon: '🚌',
  },
];

export const vehicleOptions = fleet.map((v) => ({
  value: v.id,
  label: `${v.name} (${v.segment})`,
}));
