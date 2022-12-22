import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persons : Ipersons []= [
    {name: "Kay", surname: "Mat", amount: 100000},
    {name: "Juice", surname: "Matseke", amount: 465526},
    {name: "Venom", surname: "Aiunu", amount: 52151},
    {name: "Yoik", surname: "Toifa", amount: 100000},
    {name: "Hon", surname: "genfo", amount: 4545},
    {name: "Kevin", surname: "Matseke", amount: 100055400},
    {name: "Kevin", surname: "Matseke", amount: 151574854},
    {name: "Kevin", surname: "Matseke", amount: 214188},
    {name: "Kevin", surname: "Matseke", amount: 100051510},
    {name: "Kevin", surname: "Matseke", amount: 14477777}
  ]

  columnNames = ['name', 'surname', 'amount'];

}

export interface Ipersons{
     name: string,
     surname: string,
     amount: number
}
