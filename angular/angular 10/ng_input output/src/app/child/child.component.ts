import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name: string;
  @Input() surname: string;

  // communication to parent: output
  @Output() eventMethod =  new EventEmitter();
  @Output() eventMethod_2 =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

}
