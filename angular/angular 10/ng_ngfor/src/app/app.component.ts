import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    socails : socails[]= [{
      id: 1, name: "twitter"
    },{
      id: 2, name: "facebook"
    },{
      id: 3, name: "instagram"
    }];

    update(){
       this.socails[0]={id:1,name:"*******"};
       this.socails[2]={id:3,name:"*********"};
    }

    trackByMethod(index: number, name: socails): number {
      return name.id;
    }

    // trackBy(index: number, name: model): number {
    //   return name.id;
    // }
}

interface socails{
    id:number;
    name:string;
}
