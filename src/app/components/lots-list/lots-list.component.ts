import { Component, OnInit } from '@angular/core';
import {Lot} from '../../models/lot/Lot';

import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-lots-list',
  templateUrl: './lots-list.component.html',
  styleUrls: ['./lots-list.component.css']
})
export class LotsListComponent implements OnInit {

  public lots: Lot[];

  lotsData: MatTableDataSource<any>;
  tableColumns: string[] = ['lotName', 'lotSeller', 'lotCategory', 'lotStartPrice', 'lotSendDate', 'lotStartDate', ];

  constructor() {

    this.lots = [
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
      new Lot(),
    ];

  }//constructor

  ngOnInit() {

    this.lotsData = new MatTableDataSource(this.lots);

  }//ngOnInit

}//LotsListComponent
