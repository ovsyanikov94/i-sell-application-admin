import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleLotComponent } from './components/single-lot/single-lot.component';

const routes: Routes = [

  {
    path: 'single-lot',
    component: SingleLotComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
