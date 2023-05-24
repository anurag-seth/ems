import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base_url="http://localhost:8080";
  private isAuthen: boolean = false;
  constructor(private http: HttpClient,private router:Router) {

   }

  login(payLoad:{email:string, password:string}): Observable<any>{
    return this.http.post<any>(this.base_url + "/ems/login",payLoad).pipe(map((res)=>{
      // console.log(res.sessionId);
      sessionStorage.setItem('user', payLoad.email);
      sessionStorage.setItem('sessionId', res.sessionId);
      this.isAuthen = true;
    }));
  }
  logout(){
    sessionStorage.clear();
    this.isAuthen = false;
    this.router.navigateByUrl('/login');

  }
  isAuthenticated(): boolean{
    return this.isAuthen;
  }
  isUserLogIn(){
    return sessionStorage.getItem('sessionId')!==null;
  }
  geSessionId(){
    let id = sessionStorage.getItem('sessionId') as string;
    return id;
  }
}
