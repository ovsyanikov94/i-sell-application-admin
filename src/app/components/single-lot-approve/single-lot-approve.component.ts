import { Component, OnInit } from '@angular/core';
import {RejectModalComponent} from '../../modals/reject-modal/reject-modal.component';
import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from "@angular/router";
import {LotService} from "../../services/lot/lot.service";
import * as moment from 'moment';
import {ServerResponse} from "../../models/server/ServerResponse";

@Component({
  selector: 'app-single-lot-approve',
  templateUrl: './single-lot-approve.component.html',
  styleUrls: ['./single-lot-approve.component.css']
})
export class SingleLotApproveComponent implements OnInit {

  public moment  = moment;
  
  public lot: Lot;
 

  constructor(
    public dialog: MatDialog,
    private router: ActivatedRoute,
    public lotService: LotService
  ){}

  public openModal(){

    this.dialog.open(RejectModalComponent, {data: {rejectMessage: 'Причина отклонения выставляемого лота'}});

  }//openModal

  ngOnInit() {
    const idLot = this.router.snapshot.paramMap.get("id");

    this.lotService.getLotById(
      idLot
    ).then(this.onLotResponse.bind(this));
  }

  onLotResponse(response: ServerResponse){

    try{

      if ( response.status === 200 ){

        this.lot = response.data as Lot;

        console.log(this.lot);

      }//if

    }//try
    catch ( ex ){

      console.log( "Exception: " , ex );

    }//catch


  }//onLotsResponse
}
