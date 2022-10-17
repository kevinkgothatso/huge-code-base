import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StracturalDirComponent } from './stractural-dir/stractural-dir.component';
import { CustomDirDirective } from './custom-dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    StracturalDirComponent,
    CustomDirDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
