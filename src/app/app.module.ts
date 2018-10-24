import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSortModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

//COMPONENTS
import { SingleLotComponent } from './components/single-lot/single-lot.component';
import { RejectModalComponent } from './modals/reject-modal/reject-modal.component';

import { LotsListTableComponent } from './components/lots-list-table/lots-list-table.component';

//ANGULAR IMAGE SLIDER
import { SliderModule } from 'angular-image-slider';
import { LotNotificationComponent } from './components/lot-notification/lot-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleLotComponent,
    RejectModalComponent,
    LotsListTableComponent,
    LotNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    SliderModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RejectModalComponent]
})
export class AppModule { }
