import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { environments } from 'src/app/environments/environments';
import { User } from '../interfaces/user.interface';
import { AuthStatus } from '../interfaces/auth-status.enum';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environments.baseUrl;
  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.PENDING);

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor(private http: HttpClient) {
    this.checkToken().subscribe();
  }

  login(email: string, password: string): Observable<Boolean> {
    return this.http
      .post<LoginResponse>(`${this.baseUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(
        map((resp) => this.setAuthUser(resp)),
        catchError((err) => throwError(() => err.error.message))
      );
  }

  checkToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    console.log('hay tocken', token);
    if (!token) {
      this._authStatus.set(AuthStatus.PROSPECT);
      return of(false);
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http
      .get<LoginResponse>(`${this.baseUrl}/auth/check-token`, { headers })
      .pipe(
        map((resp) => this.setAuthUser(resp)),
        catchError(() =>
          throwError(() => {
            this._authStatus.set(AuthStatus.PROSPECT);
            return of(false);
          })
        )
      );
  }

  logout() {
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.PROSPECT);
    localStorage.removeItem('token');
  }

  private setAuthUser(resp: LoginResponse): boolean {
    this._currentUser.set(resp.user);
    this._authStatus.set(AuthStatus.LOGED);
    localStorage.setItem('token', resp.token);

    return true;
  }
}
