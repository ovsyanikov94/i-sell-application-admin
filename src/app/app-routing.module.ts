import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalDataComponent} from './components/personal-data/personal-data.component'
import {UserListComponent} from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'personal-data',
    component: PersonalDataComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: '**',
    component: PersonalDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
