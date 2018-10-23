import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatSortModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

//COMPONENTS
import { SingleLotComponent } from './components/single-lot/single-lot.component';
import { RejectModalComponent } from './modals/reject-modal/reject-modal.component';
import { LotsListComponent } from './components/lots-list/lots-list.component';
import { LotsListTableComponent } from './components/lots-list-table/lots-list-table.component';

//ANGULAR IMAGE SLIDER
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    SingleLotComponent,
    RejectModalComponent,
    LotsListComponent,
    LotsListTableComponent
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
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RejectModalComponent]
})
export class AppModule { }
