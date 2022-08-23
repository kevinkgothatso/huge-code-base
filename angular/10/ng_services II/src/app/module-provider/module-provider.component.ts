import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-module-provider',
  templateUrl: './module-provider.component.html',
  styleUrls: ['./module-provider.component.css']
})
export class ModuleProviderComponent implements OnInit {

  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  ngOnInit(): void {
  }

}
