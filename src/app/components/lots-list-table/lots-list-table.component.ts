import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { LotsListTableDataSource } from './lots-list-table-datasource';
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

  dataSource: LotsListTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [  'lotSeller',
                        'lotName',
                        'lotType',
                        'lotStartPrice',
                        'lotSendDate',
                        'lotStatus',
  ];

  ngOnInit() {
    this.dataSource = new LotsListTableDataSource(this.paginator, this.sort);

    // this.dataSource.filterPredicate = (data: Lot, filter: string) => {
    //   return data.lotName == filter;
    // };

  }//ngOnInit

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }//applyFilter


}//LotsListTableComponent
