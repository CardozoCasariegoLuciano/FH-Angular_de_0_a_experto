import { Region } from '../pages/by-region-page/by-region-page.component';
import { Country } from './country.interface';

export interface CacheStorage {
  byCapitals: CacheItem;
  byCountry: CacheItem;
  byRegion: CacheRegion;
}

export interface CacheItem {
  term: string;
  countryList: Country[];
}

export interface CacheRegion {
  region: Region;
  countryList: Country[];
}
