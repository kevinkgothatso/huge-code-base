import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-stepper',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.css']
})
export class FormStepperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isLinear = false;
}
