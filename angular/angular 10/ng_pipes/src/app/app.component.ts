import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   num: number = 130;
   str: string = "dune";
   longStr: string = "Work on programming day by day";

   names =['Jon','Jack'];
}
