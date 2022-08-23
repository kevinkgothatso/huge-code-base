import { Component } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  boolValue: boolean = false;

  eventLoad(){
    return this.boolValue = true;
  }

  change(){
    this.heroService.heroes[1] = {id:2,name:"changed"};
  }

}

