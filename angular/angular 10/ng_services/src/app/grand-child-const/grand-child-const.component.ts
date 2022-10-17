import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';


@Component({
  selector: 'app-grand-child-const',
  templateUrl: './grand-child-const.component.html',
  styleUrls: ['./grand-child-const.component.css'],
})
export class GrandChildConstComponent implements OnInit {
   data = [];
  constructor( private serviceH2: HeroesService) {
        this.data = serviceH2.heroData;
  }

  ngOnInit(): void {
  }

}
