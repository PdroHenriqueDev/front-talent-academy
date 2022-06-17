import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') ?? '';
    if(token) {
      const header = request.clone({
        setHeaders: { authorization: `Bearer ${token}` }
      });
      return next.handle(header);
    }
    return next.handle(request).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if(request.headers.get('skip')) {
          return throwError(() => error);
        }
        if(error.status) {
          const msg = 'Usuário não autenticado!';
          this.authService.showSnackBar(msg, 'Fechar', 3000)
        }
        return throwError(() => error);
      })
    );
  }
}
