import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NavBarComponent } from '../components/nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [HomeComponent, NavBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatMenuModule,
    MatCardModule
  ]
})
export class HomeModule { }
