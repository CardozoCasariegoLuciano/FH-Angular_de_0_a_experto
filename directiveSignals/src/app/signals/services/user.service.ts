import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Responce, User } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  constructor() {}

  getUserByID(id: number): Observable<User> {
    return this.http
      .get<Responce>(`${this.baseUrl}/${id}`)
      .pipe(map((res) => res.data));
  }
}
