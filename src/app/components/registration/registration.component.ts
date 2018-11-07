import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user/User';
import {FormControl, Validators} from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { AuthModalComponent } from '../../modals/auth.modal/auth.modal.component';
import { PasswordConfirmValidator } from '../../Validators/PaswordValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


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
    Validators.email
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

  constructor(
    private registrationDialog: MatDialog
  ) { }

  openDialog( msg: string ){

    this.registrationDialog.open( AuthModalComponent , {
      data: {
        message: msg
      }
    });

  }//openDialog

  ngOnInit() {

    this.user.userName = 'Алексей';
    this.user.userLastname = 'Фамилия';
    this.user.userPhone = '+3809238130';
    this.user.userLogin = 'Alex';
    this.user.userEmail = 'alex@gmail.com';

  }

  checkAllFields(): boolean{

    return this.nameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.loginFormControl.valid &&
      this.emailFormControl.valid &&
      this.phoneFormControl.valid &&
      this.passwordFormControl.valid &&
      this.passwordConfirmFormControl.valid;

  }//


  registry(){


    if ( this.checkAllFields() === true ){
        //AJAX REGISTER REQUEST
    }//if
    else{
      this.openDialog('Есть ошибки в заполнении формы!');
    }//else

  }//registry
}
