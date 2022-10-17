import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
   name: string ;
   password: string;

  constructor() { }

  ngOnInit(): void {
  }

  console(){
    console.log(`TDF 1: ${this.name} ${this.password}`);
  }

}
