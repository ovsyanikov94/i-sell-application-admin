import { Component, OnInit } from '@angular/core';
import {RejectModalComponent} from '../../modals/reject-modal/reject-modal.component';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-single-lot-approve',
  templateUrl: './single-lot-approve.component.html',
  styleUrls: ['./single-lot-approve.component.css']
})
export class SingleLotApproveComponent implements OnInit {

  public lot: Lot = new Lot();
  public user: User = new User();

  constructor(public dialog: MatDialog){}

  public openModal(){

    this.dialog.open(RejectModalComponent, {data: {rejectMessage: 'Причина отклонения выставляемого лота'}});

  }//openModal

  ngOnInit() {
  }

}
