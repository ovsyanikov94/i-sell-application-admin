import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { CategoryComponent } from './components/category/category.component';
import { ChangeCategoryComponent } from './components/changeCategory/changeCategory.component';

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
        path: 'category/:id',
        component: ChangeCategoryComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
