import { Component, OnInit,HostListener } from '@angular/core';
import {User} from '../../models/user/User';
@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  correntUser: User = new User();
  dialogUser: User = new User();
  public winHeight: number ;
  constructor() { }

  ngOnInit() {
    this.winHeight = window.innerHeight - 270;
    console.log(this.winHeight);
  }//ngOnInit

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    this.winHeight = window.innerHeight - 270;
    console.log(this.winHeight);

  }//onResize
}
