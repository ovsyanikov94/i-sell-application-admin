import { Component, OnInit } from '@angular/core';

import {Admin} from '../../models/admin/Admin';

@Component({
  selector: 'app-approved-lot',
  templateUrl: './approved-lot.component.html',
  styleUrls: ['./approved-lot.component.css']
})
export class ApprovedLotComponent implements OnInit {

  public admin: Admin = new Admin();

  constructor() { }

  ngOnInit() {
  }

}
