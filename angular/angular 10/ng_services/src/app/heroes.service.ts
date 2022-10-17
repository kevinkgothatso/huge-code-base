import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroData =  [{id:1, namex: "superman",location: "NY"},
     {id:2, name: "Venom",location: "CAL"},
     {id:3, name: "Loki",location: "ASG"}];

  constructor() {
   }
}
