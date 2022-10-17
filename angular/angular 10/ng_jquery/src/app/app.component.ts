import { Component } from '@angular/core';
import {OnInit} from "@angular/core";

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
      this.jqueryMethod();

      $('#exampleModal').on('shown.bs.modal', function () {
        $('.btn-primary').trigger('focus')
      })
  }

  jqueryMethod(){
     $('#div').addClass('redClass');
     $('#xspan').html("Works");

     console.log("Jquery says: "+$('#xspan').html());
  }
}
