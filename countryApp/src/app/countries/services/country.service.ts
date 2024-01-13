import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStorage } from '../interfaces/cache-storage.interface';
import { Region } from '../pages/by-region-page/by-region-page.component';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseURL: string = 'https://restcountries.com/v3.1';

  cacheStorage: CacheStorage = {
    byCapitals: { term: '', countryList: [] },
    byCountry: { term: '', countryList: [] },
    byRegion: { region: '', countryList: [] },
  };

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url).pipe(
      catchError(() => {
        return of([]);
      })
    );
  }

  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.baseURL}/capital/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((result) => {
        this.cacheStorage.byCapitals = {
          term: term,
          countryList: result,
        };
      })
    );
  }

  searchRegion(term: Region): Observable<Country[]> {
    const url = `${this.baseURL}/region/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((result) => {
        this.cacheStorage.byRegion = {
          region: term,
          countryList: result,
        };
      })
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.baseURL}/name/${term}`;
    return this.getCountriesRequest(url).pipe(
      tap((result) => {
        this.cacheStorage.byCountry = {
          term: term,
          countryList: result,
        };
      })
    );
  }

  searchCountryByCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.baseURL}/alpha/${code}`).pipe(
      map((elem) => elem[0]),
      catchError(() => {
        return of(null);
      })
    );
  }
}
