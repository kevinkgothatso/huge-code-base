import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { powerPipe } from './power.pipe';
import { MultiplyPipe } from './multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    powerPipe,
    MultiplyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
