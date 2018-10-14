import { Component, OnInit } from '@angular/core';

import {Lot} from '../../models/lot/Lot';
import {User} from '../../models/user/User';



@Component({
  selector: 'app-single-lot',
  templateUrl: './single-lot.component.html',
  styleUrls: ['./single-lot.component.css']
})
export class SingleLotComponent implements OnInit {

  public lot: Lot = new Lot();
  public user: User = new User();

  constructor() { }

  ngOnInit() {

  }

}
