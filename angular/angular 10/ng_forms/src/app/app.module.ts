import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormValidatorsComponent } from './reactive-form-validators/reactive-form-validators.component';
import { ReactiveFormValidatorsIiComponent } from './reactive-form-validators-ii/reactive-form-validators-ii.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    ReactiveFormValidatorsComponent,
    ReactiveFormValidatorsIiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
