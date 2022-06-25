import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  loginDate = new Date(localStorage.getItem('login_date') ?? '');
  messageExists = localStorage.getItem('message');

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.getMessage();
    }, 5000)
  }

  getMessage() {
    if (this.loginDate && !this.messageExists) {
      this.http.get('/affirmations').subscribe((res: any) => {
        if (res.affirmation) {
          this.snackBar.open(res.affirmation, 'Fechar', { duration: 3000 });
          localStorage.setItem('message', res.affirmation);
        }
      })
    }

    const twentyFourHours = 86400000;
      interval(twentyFourHours)
        .subscribe(() => {
          this.http.get('/affirmations').subscribe((res: any) => {
            if (res.affirmation && this.loginDate) {
              this.snackBar.open(res.affirmation, 'Fechar', { duration: 3000 });
              localStorage.setItem('message', res.affirmation)
            }
          })
        })
  }
}
