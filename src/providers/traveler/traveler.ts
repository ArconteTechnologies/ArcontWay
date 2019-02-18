import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRestTravelerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TravelerProvider {
  //private url: string = 'http://192.168.3.71:3000/';
  //private url: string = 'http://localhost:3000/';
  private url: string ='http://192.168.100.228:3000/';

  constructor(public http: HttpClient) {}

  sendRegister(user, token){
    const httpOptions = {
      headers : new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url + 'travelers',JSON.stringify(user), httpOptions);
  }

  getData(id){
    const httpOptions = {
      headers : new HttpHeaders({
        //'Authorization': 'Bearer ' + token,
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url + 'travelers/'+id, httpOptions);
  }
}