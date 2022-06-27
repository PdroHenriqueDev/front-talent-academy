import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookService } from 'src/app/core/services/book.service';
import { Book } from 'src/app/models/book';
import { MatDialog } from '@angular/material/dialog';
import { BookFormDialog } from './book-form/book-form-dialog';
import { DialogElementsExampleDialog } from './dialog/dialog-elements-example-dialog';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'author', 'description', 'release_date', 'actions'];
  dataSource!: MatTableDataSource<Book>;
  pageSize = 10;

  constructor(
    private bookService: BookService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  getBooks() {
    return this.bookService.getBook().subscribe((res: any) => {
      console.log(res.data);
      this.books = res.data;
    });
  }

  form(data?: Book) {
    this.dialog.open(BookFormDialog, { data });
    this.dialog.afterAllClosed.subscribe(() => this.getBooks())
  }

  openDialog(data: Book) {
    const dialogRef = this.dialog.open(DialogElementsExampleDialog, { data });
    dialogRef.afterClosed().subscribe((response) => {
      if(response) {
        this.bookService.deleteBook(data).subscribe(() => this.getBooks())
      }
    })
  }
}
