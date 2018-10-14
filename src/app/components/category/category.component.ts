import { Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../models/category/Category';
import { FormControl , Validators } from '@angular/forms';
import {MatChipInputEvent, MatInput} from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  public categories: Category[];
  public cat: Category = new Category(-1, '');
  public visib: boolean;

  public categoryNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z][0-9]{2,20}$/i),
  ]);


  constructor() {

    this.categories = [
      new Category(1, 'Аксессуар')
      ,
      new Category(2, 'Смартфон'),
    ];
    this.visib = false;

  }

  ngOnInit() {


  }

  addForm(){
    this.visib = !this.visib;
  }

  addCategory(){
    this.visib = false;
  }




}
