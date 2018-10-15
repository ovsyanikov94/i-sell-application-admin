import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




// ANGULAR MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


//COMPONENTS
import { SingleLotComponent } from './components/single-lot/single-lot.component';
import { RejectModalComponent } from './modals/reject-modal/reject-modal.component';

//ANGULAR IMAGE SLIDER
import { SliderModule } from 'angular-image-slider';


@NgModule({
  declarations: [
    AppComponent,
    SingleLotComponent,
    RejectModalComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RejectModalComponent]
})
export class AppModule { }
