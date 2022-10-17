import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-validators',
  templateUrl: './reactive-form-validators.component.html',
  styleUrls: ['./reactive-form-validators.component.css']
})
export class ReactiveFormValidatorsComponent implements OnInit {
  login = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', Validators.required),
    other: new FormControl('', [Validators.compose([Validators.required,customValidator])])
  })


  ngOnInit(): void {
  }

  console(){
    console.log(`RF: ${this.login.controls.name.value} ${this.login.controls.password.value} ${this.login.controls.other.value}`);
  }

}

export function customValidator(input: FormControl): { [s: string]: boolean }{

  // if(!input.value.match(645)){
  //   return {customValidatorVariable: true};
  // }
  // else{
  //   return {customValidatorVariable: false};
  // }

  if(input.value != 645){
    return {customValidatorVariable: true};
  }
  else{
    return {customValidatorVariable: false};
  }
}


