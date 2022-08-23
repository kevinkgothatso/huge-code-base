import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
    par_name: string;

   ngOnInit(): void {
     this.par_name = 'now';
   }
    changeName(){
        this.par_name = "then";
    }
}
