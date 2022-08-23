import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  users: Iuser[];
  id: number = 16;


  url: string = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
       console.log("type of: "+typeof(this.http));
       let proto = Object.getPrototypeOf(HttpClient);
       console.log("prototype: "+proto);
      this.getMethod();
  }

  postMethod() {
    let postUser: Iuser = {"name":"Post-less", "surname":"Post-less","gender":"male" };
    this.http.post(`${this.url}`,postUser).subscribe();
  }

  deleteMethod(){
     this.http.delete(`${this.url}/${this.id}`).subscribe();
  }

  putMethod(){
    let putUser:  Iuser =  {"name":"Put-less", "surname":"Put-less","gender":"male" };
    this.http.put(`${this.url}/${this.id}`,putUser).subscribe();
  }


  getMethod() {
    this.http.get(`${this.url}`).subscribe((users: Iuser[]) => {
      this.users = users;
    })
  }

  //including http headers

  patchMethod(){
    let patchUser:  Iuser =  {"name":"Patch-less", "surname":"Patch-less","gender":"male" };
    let headers = new HttpHeaders({authoration: "pass"});
    this.http.patch(`${this.url}/${this.id}`,patchUser,{headers}).subscribe();
  }
}


export interface Iuser {
  id?: number,
  name: string,
  surname: string,
  gender: string
}
