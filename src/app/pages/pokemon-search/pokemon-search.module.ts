import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonSearchRoutingModule } from './pokemon-search-routing.module';
import { PokemonSearchComponent } from './pokemon-search.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PokemonSearchComponent
  ],
  imports: [
    CommonModule,
    PokemonSearchRoutingModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatCardModule
  ]
})
export class PokemonSearchModule { }
