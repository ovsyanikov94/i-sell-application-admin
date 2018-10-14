import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface RolesData {
  id: number;
  title: string;

}

@Component({
  selector: 'app-show-roles',
  templateUrl: './show-roles.component.html',
  styleUrls: ['./show-roles.component.css']
})
export class ShowRolesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'count', 'update', 'delete'];
  dataSource: MatTableDataSource<RolesData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    const roles = [
      {
      id:1,
      title:'admin'
    },{
      id:1,
      title:'moderator'
    },{
      id:1,
      title:'anonimus'
    },
    ];


    this.dataSource = new MatTableDataSource(roles);

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
}



