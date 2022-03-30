import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
import { BookType } from './book-type';

@Injectable({
  providedIn: 'root',
})
export class BookTypeService {
  private bookTypeApiUrl = 'localhost:9010/bookType/'; // URL to web api

  constructor(private http: HttpClient) {}

  getBookTypes(): Observable<BookType[]> {
    return this.http.get<BookType[]>(this.bookTypeApiUrl).pipe(
      tap((_) => console.error('fetched heroes')),
      catchError(this.handleError<BookType[]>('getBookTypes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
