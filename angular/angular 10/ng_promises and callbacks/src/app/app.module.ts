import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback/callback.component';
import { PromiseComponent } from './promise/promise.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    PromiseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
