import type { ImageMetadata } from 'astro';
import localCabImg from '../assets/images/LocalCab.jpeg';
import airportImg from '../assets/images/airportTransfer1.jpeg';
import outstationImg from '../assets/images/outstationCab.jpeg';
import hillStationImg from '../assets/images/HillStation.jpeg';
import charDhamImg from '../assets/images/CharDham1.jpeg';
import rishikeshImg from '../assets/images/Hrisikesh1.jpeg';
import corporateImg from '../assets/images/Corporate1.jpeg';
import mussoorieImg from '../assets/images/Mussori1.jpeg';

export interface Service {
  title: string;
  blurb: string;
  image: ImageMetadata;
}

export const services: Service[] = [
  {
    title: 'Dehradun Local Taxi',
    blurb: 'Hourly and full-day rentals inside Dehradun — shopping, meetings, hospital visits.',
    image: localCabImg,
  },
  {
    title: 'Airport Transfer',
    blurb: 'Jolly Grant Airport (DED) pickups and drops, 24/7 with flight tracking.',
    image: airportImg,
  },
  {
    title: 'Outstation Cab',
    blurb: 'One-way and round-trip outstation cabs across North India.',
    image: outstationImg,
  },
  {
    title: 'Hill Station Taxi',
    blurb: 'Experienced hill drivers for Mussoorie, Dhanaulti, Chakrata, Chopta, Auli.',
    image: hillStationImg,
  },
  {
    title: 'Char Dham Yatra Taxi',
    blurb: 'Multi-day packages covering Kedarnath, Badrinath, Gangotri, Yamunotri.',
    image: charDhamImg,
  },
  {
    title: 'Haridwar & Rishikesh Cabs',
    blurb: 'Direct cabs to Har Ki Pauri, Laxman Jhula, rafting camps, Beatles Ashram.',
    image: rishikeshImg,
  },
  {
    title: 'Corporate Travel',
    blurb: 'Monthly billing for regular corporate pickups, site visits, staff transport.',
    image: corporateImg,
  },
  {
    title: 'Tourist Packages',
    blurb: 'Curated weekend and multi-day tour packages with driver-cum-guide.',
    image: mussoorieImg,
  },
];
