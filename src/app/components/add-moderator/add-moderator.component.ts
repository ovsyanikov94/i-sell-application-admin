import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {User} from '../../models/user/User';
import {Role} from '../../models/role/Role';
import {FormControl, Validators} from '@angular/forms';
import { PasswordConfirmValidator } from '../../Validators/PaswordValidator';
import { MessageModalComponent } from '../../modals/message-modal/message-modal.component';

import {AddUserService} from "../../services/user/add-user.service";


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
    Validators.pattern(/^[a-z\d]{4,16}$/i),
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

  public roles: Role[] = [
    new Role(1, 'Администратор'),
    new Role(2, 'Модератор'),
    new Role(3, 'Загеристрированный'),
    new Role(4, 'Анонимный'),
  ];
  constructor(
    private addModeratorDialog: MatDialog,
    private addUserService: AddUserService
  ) { }

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

  openDialog( msg: string ){

    this.addModeratorDialog.open(MessageModalComponent , {
      data: {
        message: msg
      }
    });

  }//openDialog

  async addModerator(){


    if ( this.checkAllFields() === true ){
      //AJAX REGISTER REQUEST
      if (!this.user.userPhoto) {
        this.openDialog('Выберите фото!');
      }//if

      try{

        const response = await this.addUserService.addUserWithRole(this.user);

        console.log('response' , response);
        this.openDialog( response.message );

      }//try
      catch (ex){

        console.log('Exception: ' , ex);
        this.openDialog(ex.error.message );

      }//catch
    }//if
    else{
      this.openDialog('Есть ошибки в заполнении формы!');
    }//else

  }//registry

  addFile(event) {
   this.user.userPhoto = event.target.files;
   console.log(this.user.userPhoto);
  }

}
