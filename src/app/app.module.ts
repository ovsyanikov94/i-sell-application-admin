import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

//MY COMPONENTS
import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { DeleteRoleComponent } from './modals/delete-role/delete-role.component';

//SLIDER
import { SliderModule } from 'angular-image-slider';

//MATREIAL
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {
  MatBadgeModule, MatDividerModule, MatPaginatorModule, MatSidenavModule, MatSortModule,
  MatTabsModule
} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import {MatIconModule} from '@angular/material/icon';
import { ApprovedLotComponent } from './components/approved-lot/approved-lot.component';
import { RejectLotComponent } from './components/reject-lot/reject-lot.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {DeleteCategoryModalComponent} from "./modals/deleteCategory.modal/deleteCategory.modal.component";
import {MainComponent} from './components/main/main.component';
import {CategoryComponent} from './components/category/category.component';
import {MainContentComponent} from "./components/main-content/main-content.component";


@NgModule({

declarations: [
    AppComponent,
    ShowRolesComponent,
    AdminProfileComponent,
    ApprovedLotComponent,
    RejectLotComponent,
    MainComponent,
    MainContentComponent,
    CategoryComponent,
    DeleteCategoryModalComponent,
    DeleteRoleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatExpansionModule,
    MatCardModule,
    MatListModule,
    MaterialFileInputModule,
    MatIconModule,
    MatSidenavModule,
    SliderModule,
    MatBadgeModule,
    MatTabsModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatTableModule
  ],

  providers: [],
  entryComponents: [
    DeleteCategoryModalComponent,
    DeleteRoleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
