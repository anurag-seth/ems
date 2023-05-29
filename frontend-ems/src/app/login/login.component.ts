import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string= '';
  error: string = '';
  isLogIn: boolean=false;

  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService) {

  }
  ngOnInit(): void {
    // this.isLogIn = this.loginService.isUserLogIn();
  }
  login: FormGroup = new FormGroup({ email: new FormControl("", Validators.email), password: new FormControl("", Validators.required) });
  onSubmit() {
    console.log(this.login.value);
    this.loginService.login(this.login.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/home-page']),() => {
				this.error = 'Either invalid credentials or something went wrong';
			}
    });
    this.login.reset();
  }

}
