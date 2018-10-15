import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

const routes: Routes = [
  {
    path: 'roles',
    component: ShowRolesComponent
  },
  {
    path: 'profile',
    component: AdminProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
