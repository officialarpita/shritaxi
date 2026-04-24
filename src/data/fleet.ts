export interface Vehicle {
  id: string;
  name: string;
  segment: string;
  seats: number;
  luggage: string;
  bestFor: string;
}

export const fleet: Vehicle[] = [
  {
    id: 'sedan',
    name: 'Maruti Dzire',
    segment: 'Sedan',
    seats: 4,
    luggage: '2 large bags',
    bestFor: 'City rides and short airport transfers',
  },
  {
    id: 'innova',
    name: 'Toyota Innova Crysta',
    segment: 'SUV',
    seats: 6,
    luggage: '4 large bags',
    bestFor: 'Family trips, Char Dham, long tours',
  },
  {
    id: 'bolero',
    name: 'Mahindra Bolero Neo',
    segment: 'Compact SUV',
    seats: 6,
    luggage: '3 large bags',
    bestFor: 'Mountain roads, higher-altitude routes',
  },
  {
    id: 'traveller',
    name: 'Tempo Traveller',
    segment: 'Mini-coach',
    seats: 12,
    luggage: '10+ bags',
    bestFor: 'Group tours, weddings, office outings',
  },
];

export const vehicleOptions = fleet.map((v) => ({ value: v.id, label: `${v.name} (${v.segment})` }));
