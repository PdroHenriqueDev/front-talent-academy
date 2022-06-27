import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorJwtInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 403 || err.status === 401) {
          this.authService.logOut();
          this.snackBar.open('Necessário fazer login novamente!', 'Fechar', { duration: 2000 });
        }
        return throwError(() => err);
      })
    );
  }
}
