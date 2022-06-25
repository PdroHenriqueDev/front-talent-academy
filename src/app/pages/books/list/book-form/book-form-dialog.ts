import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Book } from 'src/app/models/book';
import { Validators, FormBuilder } from '@angular/forms';
import { BookService } from "src/app/core/services/book.service";
import { UserService } from './../../../../core/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'book-form-dialog',
  templateUrl: './book-form-dialog.html',
  styleUrls: ['./book-form-dialog.sass']
})

export class BookFormDialog implements OnInit {
  authors!: User[];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Book,
    public dialogRef: MatDialogRef<BookFormDialog>,
    private bookService: BookService,
    private fb: FormBuilder,
    private userService: UserService,
    ) {}

    bookForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      author: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
      release_date: ['', Validators.required],
    })

    save() {
      if (this.data && this.bookForm.valid) {
        const updatedData = {
          id: this.data.id!,
          title: this.bookForm.get('title')?.value!,
          user_id: Number(this.bookForm.get('author')?.value!),
          description: this.bookForm.get('description')?.value!,
          release_date: this.bookForm.get('release_date')?.value!,
        }
        this.bookService.updateBook(updatedData).subscribe();
        this.dialogRef.close();
      }

      if (!this.data && this.bookForm.valid) {
        const savedData = {
          title: this.bookForm.get('title')?.value!,
          user_id: Number(this.bookForm.get('author')?.value!),
          description: this.bookForm.get('description')?.value!,
          release_date: this.bookForm.get('release_date')?.value!,
        }
        this.bookService.saveBook(savedData).subscribe();
        this.dialogRef.close();
      }

    }

    ngOnInit(): void {
      if(this.data) {


        this.bookService.getBook(this.data.id).subscribe(res => {
          const [data] = res.data;
          const formattedDate = new Date(res.data[0].release_date).toISOString().split('T')[0];
          this.bookForm.setValue(
            {
              title: data.title,
              author: data.user_id.id,
              description : data.description,
              release_date: formattedDate,
            }
          )
        });
      }

      this.userService.getUser().subscribe((res) => {
        this.authors = res.data;
      })
    }
}
