import {Component, Inject, OnInit} from '@angular/core';

import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {RejectModalComponent} from '../../modals/reject-modal/reject-modal.component';

export interface DialogData {
  rejectMessage: string;
}

@Component({
  selector: 'app-single-lot',
  templateUrl: './single-lot.component.html',
  styleUrls: ['./single-lot.component.css']
})
export class SingleLotComponent implements OnInit {


  public lot: Lot = new Lot();
  public user: User = new User();

  constructor(public dialog: MatDialog){}

  public openModal(){

    this.dialog.open(RejectModalComponent, {data: {rejectMessage: 'Причина отклонения выставляемого лота'}});

  }//openModal


  ngOnInit(){ }
}






