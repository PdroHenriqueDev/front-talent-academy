import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  user: string = localStorage.getItem('user') ?? '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    this.authService.logOut()
  }
}
