export interface Testimonial {
  author: string;
  initials: string;        // for avatar
  rating: number;          // 1-5
  quote: string;
  context: string;
  date: string;            // e.g. "March 2025"
  verified: boolean;
  featured?: boolean;      // for hero treatment
}

export const testimonials: Testimonial[] = [
  {
    author: 'Priya S.',
    initials: 'PS',
    rating: 5,
    quote: 'Booked an Innova for our Char Dham yatra. Driver was patient with elderly family members and knew every shortcut. Completely hassle-free trip.',
    context: 'Char Dham — 10 days, family of 6',
    date: 'March 2025',
    verified: true,
    featured: true,  // ← gets hero layout
  },
  {
    author: 'Rahul M.',
    initials: 'RM',
    rating: 5,
    quote: 'Flight landed at Jolly Grant at 1 AM and the cab was already waiting at arrivals. Straight to Mussoorie, safe and on time.',
    context: 'Airport → Mussoorie',
    date: 'February 2025',
    verified: true,
  },
  {
    author: 'Anjali K.',
    initials: 'AK',
    rating: 5,
    quote: 'Used them for a weekend Nainital trip. Clean Innova, fair price, no surprise charges. Will book again.',
    context: 'Weekend trip — Dehradun → Nainital',
    date: 'January 2025',
    verified: true,
  },
  {
    author: 'Vikram D.',
    initials: 'VD',
    rating: 5,
    quote: 'I hire them every month for corporate site visits. Reliable invoicing, always on time, drivers know the terrain.',
    context: 'Monthly corporate bookings',
    date: 'Ongoing since 2024',
    verified: true,
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 340,
  bestRating: 5,
  worstRating: 1,
};
