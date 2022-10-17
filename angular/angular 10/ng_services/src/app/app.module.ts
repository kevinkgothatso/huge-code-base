import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentProvComponent } from './component-prov/component-prov.component';
import { ComponentConstComponent } from './component-const/component-const.component';
import { GrandChildConstComponent } from './grand-child-const/grand-child-const.component';
import { ModuleProvModule } from './module-prov/module-prov.module';
import { HeroesService } from './heroes.service';


@NgModule({
  declarations: [
    AppComponent,
    ComponentProvComponent,
    ComponentConstComponent,
    GrandChildConstComponent
  ],
  imports: [
    BrowserModule,
    ModuleProvModule
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
