import { Login } from './../models/login';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private httpClient: HttpClient) {}

  RegistroEmpresa(login: Login): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/company`, login).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(error);
      })
    );
  }

  loginEmpresa(login: Login): Observable<any> {
    return this.httpClient
      .post(`${environment.apiUrl}/loginCompany`, login)
      .pipe(
        catchError((error) => {
          return throwError(error);
        })
      );
  }
}
