import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CategoryComponent } from './components/category/category.component';

import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { ApprovedLotComponent } from './components/approved-lot/approved-lot.component';
import { RejectLotComponent } from './components/reject-lot/reject-lot.component';
import {PersonalDataComponent} from './components/personal-data/personal-data.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {DialogListComponent} from './components/dialog-list/dialog-list.component';
import {MyDialogComponent} from './components/my-dialog/my-dialog.component';

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
      {
        path: 'roles',
        component: ShowRolesComponent
      },
      {
        path: 'profile',
        component: AdminProfileComponent
      },
      {
        path: 'profile/:login',
        component: PersonalDataComponent
      },
      {
        path: 'approved-lot',
        component: ApprovedLotComponent
      },
      {
        path: 'rejected-lot',
        component: RejectLotComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path:'list-dialog',
        component: DialogListComponent
      },
      {
        path:'my-dialog/:userLogin',
        component: MyDialogComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
