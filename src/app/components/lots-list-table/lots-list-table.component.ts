import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import {Lot} from '../../models/lot/Lot';

@Component({
  selector: 'app-lots-list-table',
  templateUrl: './lots-list-table.component.html',
  styleUrls: ['./lots-list-table.component.css']
})
export class LotsListTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private lots: Lot[] = [];
  public lotListSource: MatTableDataSource<Lot>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [  'lotSeller',
                        'lotName',
                        'lotType',
                        'lotStartPrice',
                        'lotSendDate',
                        'lotStatus',
  ];

  constructor() {

    for ( let i = 0 ; i < 50 ; i++ ){

      const lot: Lot = new Lot();

      lot.lotName += ` ${i}`;
      this.lots.push(lot);

    }//for i

  }//constructor


  ngOnInit() {

    this.lotListSource = new MatTableDataSource<Lot>(this.lots);
    this.lotListSource.paginator = this.paginator;
    this.lotListSource.sort = this.sort;

  }//ngOnInit

  predicate(  ){}

  applyFilter(filterValue: string) {

    this.lotListSource.filter = filterValue.trim().toLowerCase();

  }//applyFilter


}//LotsListTableComponent
