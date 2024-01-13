import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private baseUrl = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeByID(id: string): Observable<Hero | undefined> {
    return this.http.get<Hero>(`${this.baseUrl}/heroes/${id}`).pipe(
      catchError((_) => {
        return of(undefined);
      })
    );
  }

  getSugestions(term: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.baseUrl}/heroes?q=${term}&_limit=5`);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(`${this.baseUrl}/heroes`, hero);
  }

  updateHero(hero: Hero): Observable<Hero> {
    if (!hero.id) throw Error('Hero id is required');

    return this.http.patch<Hero>(`${this.baseUrl}/heroes/${hero.id}`, hero);
  }

  /*
   * Retorna un Observable de false si no se pudo eliminar correctamente
   * y un Observable de true si sí lo pudo hacer
   */
  deleteHero(heroID: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/heroes/${heroID}`).pipe(
      map((_) => {
        return true;
      }),
      catchError((_) => of(false))
    );
  }
}
