import { Component, OnInit } from '@angular/core';
import {Admin} from '../../models/admin/Admin';
@Component({
  selector: 'app-reject-lot',
  templateUrl: './reject-lot.component.html',
  styleUrls: ['./reject-lot.component.css']
})
export class RejectLotComponent implements OnInit {

  constructor() { }
  public admin: Admin = new Admin();
  ngOnInit() {
  }

}
