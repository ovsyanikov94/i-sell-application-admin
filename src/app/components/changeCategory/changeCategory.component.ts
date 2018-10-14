import { Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../models/category/Category';
import { FormControl , Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {assertNumber} from '@angular/core/src/render3/assert';

@Component({
  selector: 'app-change-category',
  templateUrl: './changeCategory.component.html',
  styleUrls: ['./changeCategory.component.css']
})
export class ChangeCategoryComponent implements OnInit {

  public categories: Category[];
  public cat: Category;
  public id: number;
  public subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute){
    this.categories = [
      new Category(1, 'Аксессуар')
      ,
      new Category(2, 'Смартфон'),
    ];

    this.subscription = activateRoute.params.subscribe(params => this.id = params['id']);

    console.log(this.categories);
    console.log(this.id);
    this.cat = this.categories.find(c => c.categoryID === +this.id);

  }

  public categoryNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z][0-9]{2,20}$/i),
  ]);


  ngOnInit() {



    console.log(this.cat);

  }

  changeCategory(){

  }




}
