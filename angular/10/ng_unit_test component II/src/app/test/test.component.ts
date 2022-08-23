import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  date = new Date();
  newDate: string;
  constructor() { }
  title: string = "Welcome to APP";

  ngOnInit(): void {
    this.date.setFullYear(2021,3,2);
    this.newDate = `${this.date.getFullYear()}/${this.date.getMonth()}/${this.date.getDate()}`;
    console.log(this.newDate);
  }

}
