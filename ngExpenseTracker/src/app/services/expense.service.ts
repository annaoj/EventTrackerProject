import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../models/expense';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService{

  // Fields
  private baseUrl = 'http://localhost:8087/';
  private url = this.baseUrl + 'api/expenses';

  constructor(
    private http: HttpClient) { }

  // Methods

  index() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get<Expense[]>(this.url + '?sorted=true', httpOptions)
         .pipe(
               catchError((err: any) => {
                 console.log(err);
                 return throwError('getAll error');
               })
          );
  }
}
