import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { HeroesService } from '../heroes.service';



@NgModule({
  declarations: [ShowComponent],
  exports: [ShowComponent],
  imports: [
    CommonModule
  ],
  providers:[HeroesService]
})
export class ModuleProvModule { }
