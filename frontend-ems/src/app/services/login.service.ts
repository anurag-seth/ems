import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url="http://localhost:8080";
  constructor(private http: HttpClient) {

   }

  login(payLoad:{email:string, password:string}){
    return this.http.post(this.base_url + "/ems/login",payLoad);
  }
}
