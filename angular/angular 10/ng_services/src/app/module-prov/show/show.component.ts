import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes.service';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
   dataShow: any;
  constructor(private services: HeroesService) {
    this.dataShow = services.heroData;
  }

  ngOnInit(): void {
  }

}
