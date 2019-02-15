import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRestTravelerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TravelerProvider {
  private url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  sendRegister(traveler){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url + 'travelers',JSON.stringify(traveler), httpOptions);
  }
}