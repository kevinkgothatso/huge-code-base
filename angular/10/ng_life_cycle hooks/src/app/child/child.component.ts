import { Component, OnInit , OnChanges, SimpleChanges, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() titleChild;
  @Output() alertMsg =  new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    let title = changes['titleChild'];

    console.log("current value: "+title.previousValue);
    console.log("changed Value: "+title.currentValue);
  }


}
