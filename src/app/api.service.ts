import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json'
    })
};

const apiUrl = `${environment.API_URL}`;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }

  get(url: string, extendedOptions?: HttpHeaders): Observable<any> {
    const options = {
      headers: Object.assign(httpOptions.headers, extendedOptions)
    };
    return this.http.get(`${apiUrl}` + url, options).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  post(url: string, data: any, extendedOptions?: HttpHeaders): Observable<any> {
    const options = {
      headers: Object.assign(httpOptions.headers, extendedOptions)
    };
    return this.http.post(`${apiUrl}` + url, data, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  put(url: string, data: any, extendedOptions?: HttpHeaders): Observable<any> {
    const options = {
      headers: Object.assign(httpOptions.headers, extendedOptions)
    };
    return this.http.put(`${apiUrl}` + url, data, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(url: string): Observable<any> {
    return this.http.delete(`${apiUrl}` + url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
}
