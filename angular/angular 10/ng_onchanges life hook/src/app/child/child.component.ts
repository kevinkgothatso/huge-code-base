import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }
   previous: string ="";
   current: string ="";

  ngOnChanges(changes: SimpleChanges): void {
    let name = changes['name'];

    this.previous = name.previousValue;
    this.current = name.currentValue;

    console.log("current value: "+this.previous);
    console.log("changed Value: "+ this.current);
}

}
