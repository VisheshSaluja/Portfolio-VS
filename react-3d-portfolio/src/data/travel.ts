// ─── TRAVEL DATA ─────────────────────────────────────────────────
// All travel data lives in travel.json — edit that file to add
// cities, flight arcs, or bucket list items. This file just
// reads the JSON and computes stats.
//
// To add images, add "image" and "imageCaption" fields to a city
// in travel.json, and drop the photo in public/travel/.

import data from "./travel.json";

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

export const cities: City[] = data.cities as City[];
export const arcs: Arc[] = data.arcs;
export const bucketList: BucketItem[] = data.bucketList;

// ─── AUTO-CALCULATED ─────────────────────────────────────────────

const uniqueCountries = new Set(cities.map((c) => c.countryCode));
const uniqueContinents = new Set(cities.map((c) => c.continent));

export const TOTAL_COUNTRIES = 195;
export const countryCount = uniqueCountries.size;
export const worldPercent = ((countryCount / TOTAL_COUNTRIES) * 100).toFixed(1);
export const continentCount = uniqueContinents.size;

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
      if (!acc[city.countryCode].cities.includes(city.name)) {
        acc[city.countryCode].cities.push(city.name);
      }
      return acc;
    },
    {} as Record<
      string,
      { country: string; flag: string; countryCode: string; cities: string[] }
    >
  )
);
