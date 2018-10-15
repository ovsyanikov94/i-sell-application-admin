import {Component, Inject, OnInit} from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DeleteData } from '../../models/modal.data/delete.data';

@Component({
  selector: 'app-delete.modal',
  templateUrl: './delete.modal.component.html',
  styleUrls: ['./delete.modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteModalComponent>,
    @Inject(MAT_DIALOG_DATA) public deleteData: DeleteData

  ) {
console.log(deleteData);

  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
