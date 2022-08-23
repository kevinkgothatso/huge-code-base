import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  words(): string{
    return "Srvice instace created in component";
  }
}
