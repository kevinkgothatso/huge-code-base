import { Component  } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
title: string = 'liefcycle hooks';

onEvent = ()=>{
  this.title = "OnChanges";
  alert("Value changed check console:");
}

}
