import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Clase que se conecta a la ruta del usuario por medio de peticiones Http
*/
@Injectable()
export class UserProvider {
  private url: string = 'http://192.168.3.71:3000/';
  //private url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) {}

  sendRegiste(user, token){
    const httpOptions = {
      headers : new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.url + 'users',JSON.stringify(user), httpOptions);
  }

}
