export interface Testimonial {
  author: string;
  initials: string;
  rating: number;
  quote: string;
  shortQuote?: string; // truncated version for card display
  context: string;
  date: string;
  verified: boolean;
  featured?: boolean;
  source?: string;
  googleUrl?: string;
}

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/X8hFada5oFN63vUp7';

export const testimonials: Testimonial[] = [
  {
    author: 'Subhash Chaudhary',
    initials: 'SC',
    rating: 5,
    quote: 'Highly Recommended Taxi Service in Dehradun! Shri Taxi Service is one of the most reliable and professional travel services. The owner, Shobit ji, is very humble, punctual, and ensures complete comfort for every passenger. Brand-new fleet including Innova Crysta, Ertiga, Dzire — all well-maintained and spotless. Truly one of the best taxi services in Dehradun for both family and tourist travel.',
    shortQuote: 'Highly Recommended Taxi Service in Dehradun! Shri Taxi Service is one of the most reliable and professional travel services. The owner, Shobit ji, is very humble, punctual, and ensures complete comfort...',
    context: 'Char Dham Yatra & Local Trips',
    date: '6 months ago',
    verified: true,
    featured: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
  {
    author: 'Shibaji Santra',
    initials: 'SS',
    rating: 5,
    quote: "I've used quite a few ride-sharing and taxi apps, but my recent experience with Shri Taxi at my last visit to Dehradun really set a new bar for what a cab service should be.",
    context: 'Dehradun trip',
    date: '2 days ago',
    verified: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
  {
    author: 'Urvashi Barwa',
    initials: 'UB',
    rating: 5,
    quote: 'We had wonderful experience with Shree Taxi during our trip from Dehradun to Chakrata. We were absolutely happy with the driver\'s patience and professionalism and fast service.',
    context: 'Dehradun → Chakrata',
    date: 'a day ago',
    verified: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
  {
    author: 'Ghanshyam Sharma',
    initials: 'GS',
    rating: 5,
    quote: 'We felt very comfortable while traveling Chardham, the taxi driver was very humble and taking care of our needs. Thanks Shri Taxi.',
    context: 'Char Dham Yatra',
    date: '2 days ago',
    verified: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
  {
    author: 'Goti Anand',
    initials: 'GA',
    rating: 5,
    quote: 'Very prompt, decent vehicles, well mannered drivers and reasonable rates.',
    context: 'Local trip',
    date: 'a day ago',
    verified: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
  {
    author: 'Jagannath Sharma',
    initials: 'JS',
    rating: 5,
    quote: 'Nice trip with Shri taxi — it meets our expectations.',
    context: 'Outstation trip',
    date: 'a day ago',
    verified: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
  {
    author: 'Pujaa',
    initials: 'PJ',
    rating: 5,
    quote: 'Very good experience ❤️',
    context: 'Local trip',
    date: '2 days ago',
    verified: true,
    source: 'Google',
    googleUrl: GOOGLE_MAPS_URL,
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 8,
  bestRating: 5,
  worstRating: 1,
};
