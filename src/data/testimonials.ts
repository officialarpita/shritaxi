export interface Testimonial {
  quote: string;
  author: string;
  context: string;
}

// Placeholder testimonials. Replace with real customer quotes before launch
// (collect over WhatsApp / Google reviews with explicit permission to reproduce).
export const testimonials: Testimonial[] = [
  {
    quote: 'Booked an Innova for our Char Dham yatra. Driver was patient with elderly family members and knew every shortcut. Completely hassle-free trip.',
    author: 'Priya S.',
    context: 'Char Dham — 10 days, family of 6',
  },
  {
    quote: 'Flight landed at Jolly Grant at 1 AM and the cab was already waiting at arrivals. Straight to Mussoorie, safe and on time.',
    author: 'Rahul M.',
    context: 'Airport → Mussoorie',
  },
  {
    quote: 'Used them for a weekend Nainital trip. Clean Innova, fair price, no surprise charges. Will book again.',
    author: 'Anjali K.',
    context: 'Weekend trip — Dehradun ↔ Nainital',
  },
  {
    quote: 'I hire them every month for corporate site visits. Reliable invoicing, always on time, drivers know the terrain.',
    author: 'Vikram D.',
    context: 'Monthly corporate bookings',
  },
];
