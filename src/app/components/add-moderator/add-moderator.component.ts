import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {User} from '../../models/user/User';
import {Role} from '../../models/role/Role';
import {FormControl, Validators} from '@angular/forms';
import { PasswordConfirmValidator } from '../../Validators/PaswordValidator';
import { MessageModalComponent } from '../../modals/message-modal/message-modal.component';

import {UsersRoleService} from "../../services/usersRole/users-role.service";
import {ServerResponse} from "../../models/server/ServerResponse";

@Component({
  selector: 'app-add-moderator',
  templateUrl: './add-moderator.component.html',
  styleUrls: ['./add-moderator.component.css']
})
export class AddModeratorComponent implements OnInit {

  public user: User = new User();

  public nameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]);
  public lastNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z а-я]{2,25}$/i),
  ]);
  public loginFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z]{4,20}$/i),
  ]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/.+@.+\..+/i)
  ]);
  public phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^((\+3)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/ )
  ]);

  public passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  public passwordConfirmFormControl = new FormControl('', [
    Validators.required,
    PasswordConfirmValidator( this.user )
  ]);

  public photoControl = new FormControl('');

  public selectedRoleControl = new FormControl('', [
    Validators.required
  ]);

  // public matcher = new MyErrorStateMatcher();

  public roles: Role[] = [];
  constructor(
    private addModeratorDialog: MatDialog,
    private usersRoleService: UsersRoleService
  ) {
    this.usersRoleService.getUsersRole()
      .then(this.getUsersRole.bind(this));

  }

  ngOnInit() {
  }

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.loginFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.passwordFormControl.valid &&
      this.passwordConfirmFormControl.valid &&
      this.selectedRoleControl.valid;

  }//

  getUsersRole(response:ServerResponse){

//тут будет разбор ответа

    /*new Role(1, 'Администратор'),
      new Role(2, 'Модератор'),
      new Role(3, 'Аноним')*/
  }
  openDialog( msg: string ){

    this.addModeratorDialog.open(MessageModalComponent , {
      data: {
        message: msg
      }
    });

  }//openDialog

  addModerator(){


    if ( this.checkAllFields() === true ){
      //AJAX REGISTER REQUEST
    }//if
    else{
      this.openDialog('Есть ошибки в заполнении формы!');
    }//else

  }//registry

}
