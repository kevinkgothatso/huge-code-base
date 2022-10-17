import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {

  constructor() { }

  // nested formgroup
  login = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),

    address: new FormGroup({
      street: new FormControl(),
      city: new FormControl(),
      postal: new FormControl()
    })
  });

  valueChange: any;

  ngOnInit(): void {
    //checking changes via observable properties
     this.login.controls.name.valueChanges.subscribe((value: any)=>{
          this.valueChange = value.length;
     })
  }

  onSubmit() {

  //  console.log("postal: ");
   console.log("Form Values:"+JSON.stringify(this.login.value));
   console.log("Form Values 2:"+this.login.value);
  }

  showConsole(){

  }

}
