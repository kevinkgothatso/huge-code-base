import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  login = new FormGroup({
      name : new FormControl(''),
      password: new FormControl('')
  })



  constructor() {

  }

  ngOnInit(): void {
  }

  console(){
    console.log(`RF: ${this.login.controls.name.value} ${this.login.controls.password.value}`);
  }

  properties(){
    console.log(
      `Dirty: ${this.login.controls.name.dirty} Valid: ${this.login.controls.name.valid}
        Errors: ${this.login.controls.name.errors}`
    );
    this.loginValue();

  }

  loginValue(){
    console.log("Login Value: "+JSON.stringify(this.login.value ));
  }

}
