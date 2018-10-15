import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl , Validators } from '@angular/forms';
import {DeleteModalComponent} from '../../modals/delete.modal/delete.modal.component'

import { MatDialog } from '@angular/material';
import { DeleteData} from '../../models/modal.data/delete.data';

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

  public roleFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[а-я ]{4,20}$/i),
  ]);

  public newRole: string;

  constructor(
    public dialog: MatDialog
  ) {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    const roles = [
      {
      id:1,
      title:'Администратор'
    },{
      id:1,
      title:'Модератор'
    },{
      id:1,
      title:'Анонимный'
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

  deleteModal(event, row){

    const deleteData: DeleteData = new class implements DeleteData {
      message: string;
    };

    deleteData.message = `Вы уверены что хотите удалить роль ${row.title}?`;


    if ( event instanceof KeyboardEvent && event.code === "Enter" ){
      this.openDialog(deleteData);
    }//if
    else if ( event instanceof  MouseEvent){
      this.openDialog(deleteData);
    }//else if

  }

  openDialog( deleteData: DeleteData ): void {

    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '400px',
      data: deleteData
    });

  }//openDialog

  addRole(){
    console.log(this.newRole);

  }
}



