import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public mdRef: MatDialogRef<PopupComponent>) { }

  ngOnInit(): void {
    console.log(this.data.show)
  }


  login = new FormGroup({
     name : new  FormControl(),
     surname: new FormControl()
  }); 

  closePopUp(){
    this.mdRef.close(this.login.value);
  }
}
