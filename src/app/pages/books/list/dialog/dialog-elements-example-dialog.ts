import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Book } from './../../../../models/book';

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  styleUrls: ['./dialog-elements-example-dialog.scss']
})
export class DialogElementsExampleDialog {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: Book,
    public dialogRef: MatDialogRef<DialogElementsExampleDialog>,
    ) {}

}
