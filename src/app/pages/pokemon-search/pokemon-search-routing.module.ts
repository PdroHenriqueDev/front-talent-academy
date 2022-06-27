import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonSearchComponent } from './pokemon-search.component';

const routes: Routes = [{ path: '', component: PokemonSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonSearchRoutingModule { }
