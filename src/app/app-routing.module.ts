import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddRolesComponent } from './components/add-roles/add-roles.component';
import { ShowRolesComponent } from './components/show-roles/show-roles.component';

const routes: Routes = [
  {
    path: 'add-role',
    component: AddRolesComponent
  },
  {
    path: 'roles',
    component: ShowRolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
