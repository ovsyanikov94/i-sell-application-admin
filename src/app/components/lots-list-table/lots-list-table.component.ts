import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {LotsListTableDataSource} from './lots-list-table-datasource';

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
  displayedColumns = ['lotStatus',
                      'lotType',
                      'lotName',
                      'lotStartPrice',
                      'lotSendDate',
  ];

  ngOnInit() {
    this.dataSource = new LotsListTableDataSource(this.paginator, this.sort);
  }//ngOnInit

}//LotsListTableComponent
