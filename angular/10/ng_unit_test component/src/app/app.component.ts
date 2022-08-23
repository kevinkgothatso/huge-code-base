import { Component } from '@angular/core';
import { OtherService } from './other.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-skeleton';
  NewTitle : string;

  constructor(private other: OtherService ){
      this.NewTitle = other.words();
  }

}
