import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {HeroesService} from "./heroes.service";
import { AppComponent } from './app.component';
import { ModuleProviderComponent } from './module-provider/module-provider.component';
import { ComponentProviderChildComponent } from './component-provider/component-provider-child/component-provider-child.component';
import { ModuleProviderChildComponent } from './module-provider/module-provider-child/module-provider-child.component'
import { ComponentProviderComponent } from './component-provider/component-provider.component';
import { ViewProviderChildComponent } from './view-provider/view-provider-child/view-provider-child.component';
import { ViewProviderComponent } from './view-provider/view-provider.component';
import { GrandChildViewComponent } from './view-provider/grand-child-view/grand-child-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentProviderChildComponent,
    ComponentProviderComponent,
    ViewProviderChildComponent,
    ViewProviderComponent,
    ModuleProviderComponent,
    ModuleProviderChildComponent,
    GrandChildViewComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
