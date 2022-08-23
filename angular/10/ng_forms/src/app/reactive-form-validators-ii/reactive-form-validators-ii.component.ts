import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-ii',
  templateUrl: './reactive-form-validators-ii.html',
  styleUrls: ['./reactive-form-validators-ii.css']
})
export class ReactiveFormValidatorsIiComponent implements OnInit {

  login = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  showConsole(){
     console.log("Valid Login: "+this.login.valid);
     console.log("Has Error: "+this.login.controls.name.hasError('required'));
   }
}
