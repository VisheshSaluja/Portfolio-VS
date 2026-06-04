// ─── TRAVEL DATA ─────────────────────────────────────────────────
// Add cities, arcs (flights), and images here. Stats auto-calculate.
//
// To add a new trip:
// 1. Add cities to `cities` array with lat/lng
// 2. Add arcs to `arcs` array connecting the cities
// 3. Optionally add an image path for each city

export interface City {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  flag: string;
  continent: string;
  lat: number;
  lng: number;
  image?: string;
  imageCaption?: string;
}

export interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
}

export interface BucketItem {
  country: string;
  flag: string;
}

// ─── CITIES VISITED ──────────────────────────────────────────────

export const cities: City[] = [
  // India
  {
    id: "DEL",
    name: "Delhi",
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    continent: "Asia",
    lat: 28.61,
    lng: 77.21,
  },
  {
    id: "JAI",
    name: "Jaipur",
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    continent: "Asia",
    lat: 26.92,
    lng: 75.78,
  },
  {
    id: "BOM",
    name: "Mumbai",
    country: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    continent: "Asia",
    lat: 19.08,
    lng: 72.88,
  },

  // United States
  {
    id: "IAD",
    name: "Virginia",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    continent: "North America",
    lat: 38.95,
    lng: -77.45,
  },
  {
    id: "JFK",
    name: "New York",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    continent: "North America",
    lat: 40.64,
    lng: -73.78,
  },
  {
    id: "SFO",
    name: "San Francisco",
    country: "United States",
    countryCode: "US",
    flag: "🇺🇸",
    continent: "North America",
    lat: 37.62,
    lng: -122.38,
  },

  // United Kingdom
  {
    id: "LHR",
    name: "London",
    country: "United Kingdom",
    countryCode: "GB",
    flag: "🇬🇧",
    continent: "Europe",
    lat: 51.47,
    lng: -0.46,
  },

  // ── Add more cities below ─────────────────────────────────────
  // {
  //   id: "BKK",
  //   name: "Bangkok",
  //   country: "Thailand",
  //   countryCode: "TH",
  //   flag: "🇹🇭",
  //   continent: "Asia",
  //   lat: 13.69,
  //   lng: 100.75,
  //   image: "/Portfolio-VS/travel/bangkok.jpg",
  //   imageCaption: "Temples at sunset",
  // },
];

// ─── FLIGHT ARCS ─────────────────────────────────────────────────
// Each arc draws a curved line between two cities on the globe.

export const arcs: Arc[] = [
  // Delhi → Virginia (initial move)
  { startLat: 28.61, startLng: 77.21, endLat: 38.95, endLng: -77.45 },
  // Virginia → New York
  { startLat: 38.95, startLng: -77.45, endLat: 40.64, endLng: -73.78 },
  // Virginia → San Francisco
  { startLat: 38.95, startLng: -77.45, endLat: 37.62, endLng: -122.38 },
  // Virginia → London
  { startLat: 38.95, startLng: -77.45, endLat: 51.47, endLng: -0.46 },
  // Delhi → Mumbai
  { startLat: 28.61, startLng: 77.21, endLat: 19.08, endLng: 72.88 },
  // Delhi → Jaipur
  { startLat: 28.61, startLng: 77.21, endLat: 26.92, endLng: 75.78 },
];

// ─── BUCKET LIST ─────────────────────────────────────────────────

export const bucketList: BucketItem[] = [
  { country: "Japan", flag: "🇯🇵" },
  { country: "Australia", flag: "🇦🇺" },
  { country: "Norway", flag: "🇳🇴" },
  { country: "South Korea", flag: "🇰🇷" },
  { country: "Switzerland", flag: "🇨🇭" },
];

// ─── AUTO-CALCULATED STATS ───────────────────────────────────────

const uniqueCountries = new Set(cities.map((c) => c.countryCode));
const uniqueContinents = new Set(cities.map((c) => c.continent));

export const TOTAL_COUNTRIES = 195;
export const countryCount = uniqueCountries.size;
export const worldPercent = ((countryCount / TOTAL_COUNTRIES) * 100).toFixed(1);
export const continentCount = uniqueContinents.size;

// Group cities by country for the country list view
export const countriesGrouped = Object.values(
  cities.reduce(
    (acc, city) => {
      if (!acc[city.countryCode]) {
        acc[city.countryCode] = {
          country: city.country,
          flag: city.flag,
          countryCode: city.countryCode,
          cities: [],
        };
      }
      acc[city.countryCode].cities.push(city.name);
      return acc;
    },
    {} as Record<
      string,
      { country: string; flag: string; countryCode: string; cities: string[] }
    >
  )
);
