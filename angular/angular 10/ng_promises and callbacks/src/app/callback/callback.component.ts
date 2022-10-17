import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {
  name: string;
  count: number = 1;

  constructor() {
     this.ChangeName(this.setName());
  }

  ngOnInit(): void {
  }

  private setName = ()=>{
       this.name = "Hello From Angular App By CallBack";//+ this.count;
      //  this.count++;

  }

  private ChangeName(my_callback){
       setTimeout(() => {

       }, 8000);
  }
}
