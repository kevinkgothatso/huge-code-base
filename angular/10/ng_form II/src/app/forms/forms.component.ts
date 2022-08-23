import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  login = new FormGroup({
    name: new FormControl(),
    surname: new FormControl()
  });

  ngOnInit(): void {

  }

  getName(): AbstractControl {
    return this.login.controls.name;
  }

  getSurname(): AbstractControl {
    return this.login.controls.surname;
  }

  consoleShow(){
    console.log("Short Code Form:");
    console.log(`Name: ${this.getName().value}  Surname: ${this.getSurname().value}`);
  }

  status(){
    console.log("FormGroup");
    console.log(`Valid: ${this.login.valid}
    Touched: ${this.login.touched}  Value:${this.login.value}`)
  }

}
