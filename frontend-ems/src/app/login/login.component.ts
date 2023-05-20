import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService){

  }
  login:FormGroup=new FormGroup({email:new FormControl(""), password:new FormControl("")});
  onSubmit(){
    console.log(this.login.value);
    this.loginService.login(this.login.value).subscribe((res)=>{
      console.log(res);
    });
    this.login.reset();
  }
}
