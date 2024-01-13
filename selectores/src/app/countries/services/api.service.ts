import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Country, Region } from '../inferfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private baseURL: string = 'https://restcountries.com/v3.1';

  private _regions: Region[] = [
    Region.Africa,
    Region.Americas,
    Region.Asia,
    Region.Europe,
    Region.Oceania,
  ];

  constructor(private http: HttpClient) {}

  get regions(): Region[] {
    return [...this._regions];
  }

  getVountrysByRegions(region: Region): Observable<Country[]> {
    if (!region) return of([]);

    return this.http.get<Country[]>(`${this.baseURL}/region/${region}`);
  }

  getCountry(code: string): Observable<Country> {
    return this.http
      .get<Country[]>(`${this.baseURL}/alpha/${code}`)
      .pipe(map((list) => list[0]));
  }

  getAllCountriesByCode(codes: string): Observable<Country[]> {
    console.log('codigos', codes)
    if (!codes) return of([]);
    return this.http
      .get<Country[]>(`${this.baseURL}/alpha?codes=${codes}`)
  }
}
