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

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token') ?? '';
    if(token) {
      const header = request.clone({
        setHeaders: { authorization: `Bearer ${token}` }
      });
      return next.handle(header);
    }
    return next.handle(request);
  }
}
