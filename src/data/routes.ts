import type { ImageMetadata } from 'astro';
import airportImg from '../assets/images/airportTransfer2.jpeg';
import mussoorieImg from '../assets/images/Mussori2.jpeg';
import haridwarImg from '../assets/images/Haridwar.jpeg';
import rishikeshImg from '../assets/images/Hrisikesh2.jpeg';
import nainitalImg from '../assets/images/Nainital.jpeg';
import charDhamImg from '../assets/images/CharDham2.jpeg';
import badrinathImg from '../assets/images/Badrinath.jpeg';

export interface Route {
  from: string;
  to: string;
  distanceKm: number;
  approxDuration: string;
  image: ImageMetadata;
}

export const routes: Route[] = [
  { from: 'Jolly Grant Airport', to: 'Dehradun', distanceKm: 27, approxDuration: '45 min', image: airportImg },
  { from: 'Dehradun', to: 'Mussoorie', distanceKm: 35, approxDuration: '1 hr 30 min', image: mussoorieImg },
  { from: 'Dehradun', to: 'Haridwar', distanceKm: 54, approxDuration: '1 hr 30 min', image: haridwarImg },
  { from: 'Dehradun', to: 'Rishikesh', distanceKm: 46, approxDuration: '1 hr 15 min', image: rishikeshImg },
  { from: 'Dehradun', to: 'Nainital', distanceKm: 285, approxDuration: '7 hr', image: nainitalImg },
  { from: 'Dehradun', to: 'Kedarnath (Sonprayag)', distanceKm: 250, approxDuration: '9 hr', image: charDhamImg },
  { from: 'Dehradun', to: 'Badrinath', distanceKm: 320, approxDuration: '11 hr', image: badrinathImg },
];
