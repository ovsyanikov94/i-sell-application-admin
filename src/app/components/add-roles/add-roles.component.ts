import { Component, OnInit } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-add-roles',
  templateUrl: './add-roles.component.html',
  styleUrls: ['./add-roles.component.css']
})
export class AddRolesComponent implements OnInit {

  public roleFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[а-я]{4,20}$/i),
  ]);


  constructor() { }

  ngOnInit() {
  }

}
