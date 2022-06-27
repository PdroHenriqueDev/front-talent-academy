import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';

const routes: Routes = [{
  path: '',
  component: ContainerComponent,
  children: [
    { path: '', loadChildren: () => import('../../home/home.module').then(m => m.HomeModule) },
    { path: 'books', loadChildren: () => import('../../books/list/book-list.module').then(m => m.BookListModule) },
    { path: 'pokemon', loadChildren: () => import('../../pokemon-search/pokemon-search.module').then(m => m.PokemonSearchModule) }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
