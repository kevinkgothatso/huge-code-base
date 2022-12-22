import { Component, OnInit , ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-paginator-ii',
  templateUrl: './card-paginator-ii.component.html',
  styleUrls: ['./card-paginator-ii.component.css']
})
export class CardPaginatorIIComponent implements OnInit {

  columnNames = ['name', 'surname', 'amount']; 

  personsMP = new MatTableDataSource(persons);
  obs = new Observable<any>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  ngOnInit(): void {
    // this.persons.sort = this.sort;
    this.personsMP.paginator = this.paginator;
    this.obs = this.personsMP.connect();
  } 

}

export const persons : Ipersons []= [
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

export interface Ipersons{
  name: string,
  surname: string,
  amount: number
}
