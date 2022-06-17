import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  user: string = localStorage.getItem('user') ?? '';
  loginDate = new Date(localStorage.getItem('login_date') ?? '');
  nextDay = new Date(this.loginDate.setDate(this.loginDate.getDate() + 1));
  message: any = ''

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    console.log(this.nextDay);
    this.getMessage()
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  getMessage() {
    const today = new Date();
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
    console.log('the headers', headers);

    if (today < this.nextDay) {
      this.http.get('https://www.affirmations.dev/', {
        headers,
      }).subscribe((res: any) => {
      console.log(res);

      });
    }
  }

}
