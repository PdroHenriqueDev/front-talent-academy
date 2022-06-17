import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { MatInputModule } from '@angular/material/input';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ],
})
export class RegisterModule { }
