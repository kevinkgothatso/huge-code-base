import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DepartmentChildComponent } from './department/department-child.component';
import { DepartmentComponent } from './department/department.component';
import { AnotherChildComponent } from './department/another-child.comonent';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DepartmentChildComponent,
    DepartmentComponent,
    AnotherChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
