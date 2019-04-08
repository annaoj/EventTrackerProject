import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from '../models/expense';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  // Fields
  // private baseUrl = 'http://localhost:8087/';
  private baseUrl = environment.baseUrl;

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

  destroy(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    console.log(id);
    return this.http.delete<any>(this.url + '/' + id, httpOptions);
  }

  public create(expense: Expense) {
    console.log(expense);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>(this.url, expense, httpOptions);
  }

  public update(expense: Expense) {
    console.log(expense);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.put<Expense>(`${this.url}/${expense.id}`, expense, httpOptions).pipe(
      catchError((err: any) => {
        console.error('ExpenseService.update(): Error');
        console.error(err);
        return throwError('Error in ExpenseService.update()');
      })
    );
  }

}
