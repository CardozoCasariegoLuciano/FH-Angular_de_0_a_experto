import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environments.baseUrl;
  private _user?: User | undefined;

  constructor(private http: HttpClient) {}

  public get user(): User | undefined {
    //Para pasar el objeto como valor y no como referenia
    return structuredClone(this._user);
  }
  public set user(value: User | undefined) {
    this._user = value;
  }

  public logIn(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((resp) => {
        this._user = resp;
        localStorage.setItem('token', resp.id.toString());
      })
    );
  }

  public checkAuth(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) return of(false);

    return this.http.get<User>(`${this.baseUrl}/users/1`).pipe(
      tap((user) => {
        this._user = user;
      }),
      map((user) => !!user),
      catchError(() => of(false))
    );
  }

  logout() {
    localStorage.clear();
    this._user = undefined;
  }
}
