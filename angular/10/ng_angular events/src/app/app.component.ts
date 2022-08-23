import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // ele: any = document.getElementById("btn");
  // ele.addEventListener('click', function(){
  //   alert("From Even Handler");
  // })


  NgEvent = ()=>{
    alert("Hello from ANgular HTML Event");
  }
}
