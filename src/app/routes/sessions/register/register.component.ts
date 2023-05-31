import { Component } from '@angular/core';
import {FormBuilder, Validators, AbstractControl, UntypedFormControl} from '@angular/forms';
import {User} from "../../../model/User.model";
import {AuthService} from "@core";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder,private auth: AuthService) {}
  registerForm = this.fb.nonNullable.group(
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [this.matchValidator('password', 'confirmPassword')],
    }
  );
Save(){
  console.log(this.registerForm.value)
  const user = new User;
  const signup = this.registerForm.value;
  user.userName = signup.username;
  user.userPassword = signup.password;
  this.auth.signup(user).subscribe(
    res=>{
      console.log(res);
    },error => {
      console.log(error)
    }
  )

}


  matchValidator(source: string, target: string) {
    return (control: AbstractControl) => {
      const sourceControl = control.get(source)!;
      const targetControl = control.get(target)!;
      if (targetControl.errors && !targetControl.errors.mismatch) {
        return null;
      }
      if (sourceControl.value !== targetControl.value) {
        targetControl.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        targetControl.setErrors(null);
        return null;
      }
    };
  }
}
