import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-grand-child-view',
  templateUrl: './grand-child-view.component.html',
  styleUrls: ['./grand-child-view.component.css'],
  viewProviders: [HeroesService]
})
export class GrandChildViewComponent implements OnInit {

  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  ngOnInit(): void {
  }

}
