import { Component } from '@angular/core';
import {OnInit} from "@angular/core";

declare function alert2(): any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
   ngOnInit(): void {

   }

   alertx(){
     alert2();
   }

}
