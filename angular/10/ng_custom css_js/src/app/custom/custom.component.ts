import { Component, OnInit } from '@angular/core';

 declare function alertz(): any;
declare let name_project: any;

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  name: string;

  constructor(){
     this.name = name_project;
  }
  ngOnInit(): void {
       alertz();
      //problem is is instaiated many times
  }

}
