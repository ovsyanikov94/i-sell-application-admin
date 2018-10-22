import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import {LotsListTableDataSource, LotsListTableItem} from './lots-list-table-datasource';

@Component({
  selector: 'app-components/lots-list-table',
  templateUrl: './lots-list-table.component.html',
  styleUrls: ['./lots-list-table.component.css']
})
export class LotsListTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: LotsListTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['LotName',
                      'LotSeller',
                      'LotCategory',
                      'LotStartPrice',
                      'LotSendDate',
                      'LotStartDate'
  ];

  ngOnInit() {
    this.dataSource = new LotsListTableDataSource(this.paginator, this.sort);
  }//ngOnInit

}//LotsListTableComponent
