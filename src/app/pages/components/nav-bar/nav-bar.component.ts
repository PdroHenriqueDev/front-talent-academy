import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AffirmationsService } from './../../../core/services/affirmations.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  user: string = localStorage.getItem('user') ?? '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
