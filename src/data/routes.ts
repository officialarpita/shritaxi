export interface Route {
  from: string;
  to: string;
  distanceKm: number;
  approxDuration: string;
}

export const routes: Route[] = [
  { from: 'Jolly Grant Airport', to: 'Dehradun', distanceKm: 27, approxDuration: '45 min' },
  { from: 'Dehradun', to: 'Mussoorie', distanceKm: 35, approxDuration: '1 hr 30 min' },
  { from: 'Dehradun', to: 'Haridwar', distanceKm: 54, approxDuration: '1 hr 30 min' },
  { from: 'Dehradun', to: 'Rishikesh', distanceKm: 46, approxDuration: '1 hr 15 min' },
  { from: 'Dehradun', to: 'Nainital', distanceKm: 285, approxDuration: '7 hr' },
  { from: 'Dehradun', to: 'Kedarnath (Sonprayag)', distanceKm: 250, approxDuration: '9 hr' },
  { from: 'Dehradun', to: 'Badrinath', distanceKm: 320, approxDuration: '11 hr' },
];
