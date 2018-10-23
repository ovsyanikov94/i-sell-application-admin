import { Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../models/category/Category';
import { FormControl , Validators } from '@angular/forms';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { DeleteCategoryModalComponent } from '../../modals/deleteCategory.modal/deleteCategory.modal.component';
import { CategoryData } from '../../models/modal.category/category.data';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'update', 'delete'];
  dataSource: MatTableDataSource<Category>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  public categories: Category[];
  public cat: Category = new Category(-1, '');
  public visib: boolean;

  public formControls: FormControl[] = [];

  public categoryNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z,а-я,0-9, ]{2,20}$/i),
  ]);

  constructor(public dialog: MatDialog) {

    this.categories = [
      new Category(1, 'Аксессуар')
      ,
      new Category(2, 'Смартфон'),
    ];
    this.visib = false;

    this.dataSource = new MatTableDataSource(this.categories);

    for ( let i = 0 ; i < this.categories.length ; i++ ) {

      this.formControls.push( new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-z,а-я,0-9, ]{2,20}$/i),
      ]));

    }// for

  }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }// ngOnInit

  addForm() {
    this.cat.categoryTitle = '';
    this.visib = !this.visib;
  }

  addCategory(event) {

    if ( this.categoryNameFormControl.hasError('required') || this.categoryNameFormControl.hasError('pattern')) {
      return;
    }

    if ( this.categoryNameFormControl.hasError('required') ) {
      return;
    }

    if ( event instanceof KeyboardEvent && event.code === 'Enter' ) {
      this.visib = false;
    } else if ( event instanceof  MouseEvent) {
      this.visib = false;
    }


  }

  delete( event , category: Category ) {

    this.openDialog({
      categoryID: category.categoryID,
      categoryTitle: category.categoryTitle,
    });


  }// delete

  openDialog(catData: CategoryData ): void {

    const dialogRef = this.dialog.open(DeleteCategoryModalComponent, {
      width: '400px',
      data: catData
    });

  }


}
