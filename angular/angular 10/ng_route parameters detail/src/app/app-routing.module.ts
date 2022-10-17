import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'',redirectTo:"about", pathMatch: "full"},
  {path:'about', component: AboutComponent},
  {path:'department', component: DepartmentComponent},
  {path:'department/:id', component: DepartmentDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
