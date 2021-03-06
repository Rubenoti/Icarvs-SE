import { Login } from './../models/login';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  registro(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/user`, login).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  login(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/login`, login).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }
  guardarDatos(data: any): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/data`, data).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  getUser(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/data`).pipe(
      catchError((error) => {
        return error;
      })
    );
  }
}
