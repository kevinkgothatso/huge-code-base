import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     par_name: string;
     par_surname: string;

     constructor(){
       this.par_name="Jon";
       this.par_surname= "Snow";
     }

     par_evenMethod(){
        alert("Method 1");
     }

     par_evenMethod_2(){
      alert("Method 2 and name is "+this.par_name);

     }
}
