import { Component, OnInit } from '@angular/core';
import { IUsers } from './interfaces/users';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    postUser : IUsers = {"name": "Post","surname": "Angular", "gender": "male"};
    patchUser: IUsers =  {"name": "Patch","surname": "Angular", "gender": "male"};
    putUser: IUsers =  {"name": "Put","surname": "Angular", "gender": "male"};
    index: number = 15;
    putInex: number = 15;
    patchIndex: number = 15;
    users: IUsers[];

    constructor(private request: RequestsService){}

    ngOnInit(): void {

        this.request.get().subscribe(
          (response: IUsers[])=>{
           this.users = response;},

           (err)=>{
               console.log(err.status);
               console.log(err);
        });

    }

    post(){
      this.request.post(this.postUser).subscribe((response)=>{
          console.table(response);
      })
    }

    patch(){
      this.request.patchEdit(this.patchUser, this.patchIndex).subscribe((response)=>{
        console.log('patch'+response);
    })
    }

    put(){
      this.request.putReplace(this.putUser, this.putInex).subscribe((response)=>{
        console.log("put"+response);
     })
    }

    deletex(){
      this.request.delete(this.index).subscribe();
    }
}
