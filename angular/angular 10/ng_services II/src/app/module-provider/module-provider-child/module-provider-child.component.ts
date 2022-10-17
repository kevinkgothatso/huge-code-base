import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-module-provider-child',
  templateUrl: './module-provider-child.component.html',
  styleUrls: ['./module-provider-child.component.css']
})
export class ModuleProviderChildComponent implements OnInit {

  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  ngOnInit(): void {
  }

}
