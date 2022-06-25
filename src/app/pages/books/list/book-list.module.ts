import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListRoutingModule } from './book-list-routing.module';
import { BookListComponent } from './book-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { BookFormDialog } from './book-form/book-form-dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    BookListComponent,
    BookFormDialog
  ],
  imports: [
    CommonModule,
    BookListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class BookListModule { }
