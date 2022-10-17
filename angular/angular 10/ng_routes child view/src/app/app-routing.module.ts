import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AnotherChildComponent } from './department/another-child.comonent';
import { DepartmentChildComponent } from './department/department-child.component';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {path:'about', component: AboutComponent},
  {path:'department', component: DepartmentComponent},
  {path:'department',
  component: DepartmentComponent,
  children:[{path:'department-child', component:DepartmentChildComponent},
  {path:'another-child', component: AnotherChildComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
