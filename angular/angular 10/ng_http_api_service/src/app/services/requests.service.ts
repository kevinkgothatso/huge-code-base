import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { IUsers } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  url =  'http://localhost:3000/users';

  constructor(private http : HttpClient ) { }

  get(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this.url);
  }

  post(user: IUsers): Observable<IUsers>{
    return this.http.post<IUsers>(this.url, user);
  }

  patchEdit(user: IUsers, index): Observable<IUsers>{
     return this.http.patch<IUsers>(`${this.url}/${index}`,user);
  }

  putReplace(user: IUsers,index): Observable<IUsers>{
    return this.http.put<IUsers>(`${this.url}/${index}`,user);
 }

  delete(index): Observable<void>{
    return this.http.delete<void>(`${this.url}/${index}`);
  }

}
