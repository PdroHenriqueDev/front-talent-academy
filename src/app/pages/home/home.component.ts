import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.bookService.getBook().subscribe((res: any) => {
      this.books = res.data;
    })
  }
}
