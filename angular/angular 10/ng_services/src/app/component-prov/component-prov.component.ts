import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-component-prov',
  templateUrl: './component-prov.component.html',
  styleUrls: ['./component-prov.component.css'],
  providers: [HeroesService]
})
export class ComponentProvComponent implements OnInit {
   data = [];

  constructor(serviceH: HeroesService) {
    this.data = serviceH.heroData;
  }

  ngOnInit(): void {
  }

}
