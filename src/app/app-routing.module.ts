import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CategoryComponent } from './components/category/category.component';

import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ApprovedLotComponent } from './components/approved-lot/approved-lot.component';
import { RejectLotComponent } from './components/reject-lot/reject-lot.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: MainContentComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },

    ]
  },
  {
    path: 'roles',
    component: ShowRolesComponent
  },
  {
    path: 'profile',
    component: AdminProfileComponent
  },
  {
    path: 'approved-lot',
    component: ApprovedLotComponent
  },
  {
    path: 'rejected-lot',
    component: RejectLotComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
