import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-component-provider',
  templateUrl: './component-provider.component.html',
  styleUrls: ['./component-provider.component.css'],
  providers:[HeroesService]
})
export class ComponentProviderComponent implements OnInit {

  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  ngOnInit(): void {
  }

  proMethod(){
    this.heroService.heroes[1] = {id:2,name:"Component Provider"};
  }

}
