import { VariableBinding } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stractural-dir',
  templateUrl: './stractural-dir.component.html',
  styleUrls: ['./stractural-dir.component.css']
})
export class StracturalDirComponent implements OnInit {

  variableNgIf: string = "Shalow-work";

  variableNgFors : string [] = ["Twitter","Facebook","Instagram","Youtube"];

  variableSwitch : string = this.variableNgFors[0];

  constructor() { }

  ngOnInit(): void {
  }

}
