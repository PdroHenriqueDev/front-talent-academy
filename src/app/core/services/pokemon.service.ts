import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }

  showSnackBar(msg: string, action: string, time: number) {
    this.snackBar.open(msg, action, {
      duration: time,
    });
  }

  getPokeomByName(name: String) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .pipe(
      catchError(err => {
        const errorMsg  = err.error === 'Not Found' ? 'Não encontrado' : err.error;
        this.showSnackBar(errorMsg, 'Fechar', 2000)
        return throwError(() => err)
      })
    );
  }
}
