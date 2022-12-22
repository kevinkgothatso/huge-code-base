import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { PopupComponent } from './dialog/popup/popup.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule}  from "@angular/forms";
import { FormStepperComponent } from './form-stepper/form-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { CardPaginationComponent } from './card-pagination/card-pagination.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import { CardPaginatorIIComponent } from './card-paginator-ii/card-paginator-ii.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    PopupComponent,
    FormStepperComponent,
    CardPaginationComponent,
    CardPaginatorIIComponent,
    GoogleMapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
