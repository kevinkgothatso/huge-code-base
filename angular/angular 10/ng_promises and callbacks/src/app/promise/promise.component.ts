import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  name: string = "========";

  constructor() {
      this.onComplete().then(this.setName).catch(()=> this.name = "Failure: reject");
      }

  ngOnInit(): void {
  }

  private onComplete(){
    return new Promise((resolve: any, reject: any) => {

         if(this.name ===  "========"){
           resolve();
         }
         reject();

      });
    }

  private setName = ()=>{
    this.name = "Hello From Angular App By Promise";
   }

}
