import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { AuthService } from '@core/authentication';
import {User} from "../../../model/User.model";
import {JwtRequest} from "../../../model/JwtRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSubmitting = false;

  loginForm = this.fb.nonNullable.group({
    username: ['ng-matero', [Validators.required]],
    password: ['ng-matero', [Validators.required]],
    rememberMe: [false],
  });

  constructor(private fb: FormBuilder, private router: Router, private auth: AuthService) {}

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')!;
  }

  login() {
    console.log(this.loginForm.value)
    const user = new JwtRequest();
    const signup = this.loginForm.value;
    user.userName = signup.username;
    user.userPassword = signup.password;
    this.auth.signin(user).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(["/dashboard"])
        sessionStorage.setItem('token',res.jwtToken)
      },error => {
        console.log(error)

      }
    )
  }
}
