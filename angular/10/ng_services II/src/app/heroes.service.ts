import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: heroes [] =[
    {id:1, name:'iron man'},
    {id:2, name:'dr strange'},
    {id:3, name:'hawkey'}
  ]

  getHeroes(){
    return this.heroes;
  }

}

export interface heroes{
  id: number,
  name: string;
}

