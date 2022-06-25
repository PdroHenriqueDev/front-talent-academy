import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  getUser(id?: number): Observable<any> {
    const { apiURL } = environment;
    return id
      ? this.http.get(`${apiURL}/user?id=${id}`)
      : this.http.get(`${apiURL}/user`)
  }

  showSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, action, {
      duration: time,
    });
  }
}
