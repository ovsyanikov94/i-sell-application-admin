import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleLotComponent } from './components/single-lot/single-lot.component';
import {LotsListTableComponent} from './components/lots-list-table/lots-list-table.component';

const routes: Routes = [

  {
    path: 'single-lot',
    component: SingleLotComponent
  },
  {
    path: 'lots-list',
    component: LotsListTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
