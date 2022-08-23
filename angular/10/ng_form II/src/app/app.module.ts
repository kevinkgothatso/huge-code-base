import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { NestedFormComponent } from './nested-form/nested-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    NestedFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
