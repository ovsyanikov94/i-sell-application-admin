import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

//MY COMPONENTS
import { ShowRolesComponent } from './components/show-roles/show-roles.component';
import {DeleteModalComponent} from "./modals/delete.modal/delete.modal.component";
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

//MATREIAL
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatSortModule} from "@angular/material";
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ShowRolesComponent,
    DeleteModalComponent,
    AdminProfileComponent
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
    MatListModule
  ],
  providers: [],
  entryComponents: [
    DeleteModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
