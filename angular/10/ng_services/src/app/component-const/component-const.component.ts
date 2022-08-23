import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-component-const',
  templateUrl: './component-const.component.html',
  styleUrls: ['./component-const.component.css']
})
export class ComponentConstComponent implements OnInit {
    heroList: any = [];
    // hero: HeroesService;

  constructor(private serviceHero: HeroesService) {
     this.heroList = serviceHero.heroData;
   }

   changeMethod(){
    this.serviceHero.heroData[2] = { id:3,name:"Changed",location:"Changed"};
   }

  ngOnInit(): void {
  }

}
