import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   innerText: string = "Hello World";
   plc_holder :string ="Enter Text";
   valueBtn: string ="Press Here";

   redClass: string = "background-color: red;";
   mutiple_style: string= 'font-size: 1.2rem; color: cornflowerblue;';

  Multiple_class = {
    black: true,
    redNew: true
  }

   single_class= {
    black: true
  }

  single: boolean = true;
}
