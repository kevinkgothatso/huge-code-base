import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';

@Component({
  selector: 'app-view-provider-child',
  templateUrl: './view-provider-child.component.html',
  styleUrls: ['./view-provider-child.component.css'],

})
export class ViewProviderChildComponent implements OnInit {

  heroes: any[];


  constructor(private heroService: HeroesService){
      this.heroes = heroService.heroes;
  }

  ngOnInit(): void {
  }

}
