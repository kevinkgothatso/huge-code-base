import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  popUp(){

    //  this.dialog.open(PopupComponent,{
    //      width: "40%",
    //      height: "40%",
    //      data:{
    //         show: "Enter name and surname below"
    //      }
    //  });

    //saving a refernce of the popup dailog
    
     const popup =  this.dialog.open(PopupComponent,{
         width: "40%",
         height: "40%",
         data:{
            show: "Enter name and surname below"
         }
     });

     popup.afterClosed().subscribe((data)=>{
         console.log(data);
     });
  }

}
