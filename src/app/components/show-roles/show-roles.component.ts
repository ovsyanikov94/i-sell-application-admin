import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl , Validators } from '@angular/forms';
import {DeleteModalComponent} from '../../modals/delete.modal/delete.modal.component';

import { MatDialog } from '@angular/material';
import { DeleteData} from '../../models/modal.data/delete.data';
import { Role } from '../../models/role/Role';

@Component({
  selector: 'app-show-roles',
  templateUrl: './show-roles.component.html',
  styleUrls: ['./show-roles.component.css']
})
export class ShowRolesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'count', 'update', 'delete'];
  dataSource: MatTableDataSource<Role>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public roles: Role[];
  public roleFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[а-я ]{4,20}$/i),
  ]);

  public newRole: string;
  public formControls: FormControl[] = [];

  constructor(
    public dialog: MatDialog
  ) {
    //const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    this.roles=[
      new Role(1, 'Администратор'),
      new Role(2, 'Модероатор'),
      new Role(3, 'Аноним'),
    ];

    this.dataSource = new MatTableDataSource(this.roles);

    for ( let i = 0 ; i < this.roles.length ; i++ ) {

      this.formControls.push( new FormControl('', [
        Validators.required,
        Validators.pattern(/^[а-я ]{4,20}$/i),
      ]));

    }// for

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
    deleteData.message = `Вы уверены что хотите удалить роль ${row.roleTitle}?`;


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



