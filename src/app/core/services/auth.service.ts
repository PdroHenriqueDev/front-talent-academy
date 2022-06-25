import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private snackBar:MatSnackBar,
    private router: Router,
  ) { }

  showSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, action, {
      duration: time,
    });
  }

  login(email: string, password: string) {
    const { apiURL } = environment;
    return this.http.post(`${apiURL}/user/login`, {
      email,
      password
    })
    .pipe(
      catchError(err => {
        const  errorMsg  = err.error.error;
        this.showSnackBar(errorMsg, 'Fechar', 2000)
        return throwError(() => err)
      }),
      map((res: any) => {
        if (!res?.error) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', res.data.user.name);
          localStorage.setItem('login_date', new Date().toDateString())
          this.router.navigateByUrl('/');
          this.showSnackBar('Seja bem-vindo!', 'Fechar', 2000);
        }
      })
    )
  }

  register(name: string, email: string, password: string) {
    const { apiURL } = environment;
    return this.http.post(`${apiURL}/user/create`, {
      name,
      email,
      password
    })
    .pipe(
      catchError(err => {
        const errorMsg  = err.error.error;
        this.showSnackBar(errorMsg, 'Fechar', 2000)
        return throwError(() => err)
      }),
      map((res: any) => {
        if (!res?.error) {
          this.showSnackBar('Faça o login com os seus dados!', 'Fechar', 2000);
          this.router.navigateByUrl('login');
        }
      })
    )
  }
}
