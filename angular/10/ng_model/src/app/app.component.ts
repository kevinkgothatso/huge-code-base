import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   name: string = "Enter Text";
   bolValue: boolean = false;

   eventMethod(): void{
     this.bolValue = true;
   }
}
