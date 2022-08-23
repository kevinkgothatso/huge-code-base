import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-component-provider-child',
  templateUrl: './component-provider-child.component.html',
  styleUrls: ['./component-provider-child.component.css']
})
export class ComponentProviderChildComponent implements OnInit {

  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  ngOnInit(): void {
  }

}
