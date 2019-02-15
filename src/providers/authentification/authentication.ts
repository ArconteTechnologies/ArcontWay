import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Authentication provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Authentication {
  private url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  /*return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });*/

  getPhoneLogin(traveler){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.get(this.url + 'authentication');
  }
}