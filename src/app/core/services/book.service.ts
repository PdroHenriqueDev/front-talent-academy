import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Book } from './../../models/book';
import { catchError, map, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  showSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, action, {
      duration: time,
    });
  }

  getBook(id?: number): Observable<any> {
    const { apiURL } = environment;
    return id
      ? this.http.get(`${apiURL}/book?id=${id}`)
      : this.http.get(`${apiURL}/book`)
  }

  saveBook(data: Book) {
    const { apiURL } = environment;
    return this.http.post(`${apiURL}/book/create`,  data )
    .pipe(
      catchError(err => {
        const errorMsg  = err.error.error;
        this.showSnackBar(errorMsg, 'Fechar', 2000)
        return throwError(() => err)
      }),
      map((res: any) => {
        if (!res?.error) {
          const successMsg = res.data;
          this.showSnackBar(successMsg, 'Fechar', 2000);
        }
      })
    );
  }

  updateBook(data: Book) {
    const { apiURL } = environment;
    const { id } = data;
    return this.http.put(`${apiURL}/book/${id}`,  data )
    .pipe(
      catchError(err => {
        const errorMsg  = err.error.error;
        this.showSnackBar(errorMsg, 'Fechar', 2000)
        return throwError(() => err)
      }),
      map((res: any) => {
        if (!res?.error) {
          const successMsg = res.data;
          this.showSnackBar(successMsg, 'Fechar', 2000);
        }
      })
    );
  }

  deleteBook(data: Book) {
    const { apiURL } = environment;
    const { id } = data;
    return this.http.delete(`${apiURL}/book/${id}`)
    .pipe(
      catchError(err => {
        const errorMsg  = err.error.error;
        this.showSnackBar(errorMsg, 'Fechar', 2000)
        return throwError(() => err)
      }),
      map((res: any) => {
        if (!res?.error) {
          const successMsg = res.data;
          this.showSnackBar(successMsg, 'Fechar', 2000);
        }
      })
    );
  }
}
