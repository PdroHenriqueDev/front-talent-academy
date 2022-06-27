import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.isLoggedIn) {
      const msg = 'Usuário precisa está logado para acessar a página!'
      this.authService.showSnackBar(msg, 'Fechar', 3000);
      this.router.navigate(['login'])
    }
    return true;
  }

  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token') as string;
    const userIsLogged = token;
    return userIsLogged ? true : false;
  }

}
