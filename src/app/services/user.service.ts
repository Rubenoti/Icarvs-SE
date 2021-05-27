import { Login } from './../models/login';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  registro(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user`, login).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
}
