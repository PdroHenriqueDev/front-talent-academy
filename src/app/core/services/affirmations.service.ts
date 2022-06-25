import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffirmationsService {

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

  getBook(id?: number) {
    const { apiURL } = environment;
    return id
      ? this.http.get(`${apiURL}/book?id=${id}`)
      : this.http.get(`${apiURL}/book`)
  }

  getMessage() {
    this.http.get('/affirmations').subscribe((res: any) => {
      res.affirmation
    })
    const twentyFourHours = 86400000;
      interval(500)
        .subscribe(() => {
          this.http.get('/affirmations').subscribe((res: any) => {
            console.log('the res', res);
            res.affirmation
          })
        })
  }
}
