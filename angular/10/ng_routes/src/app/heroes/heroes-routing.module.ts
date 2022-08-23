import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:"heroes", component:HeroesComponent},
  {path:"services", component:ServicesComponent},
  {path: "", redirectTo: '/heroes',pathMatch: 'full'}
];

@NgModule({
  declarations: [ServicesComponent
    ,HeroesComponent
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
