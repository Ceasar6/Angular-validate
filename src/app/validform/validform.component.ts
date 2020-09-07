import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-validform',
  templateUrl: './validform.component.html',
  styleUrls: ['./validform.component.css']
})
export class ValidformComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.matchPassword});
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.formLogin.get('email');
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.formLogin.get('password');
  }
  // tslint:disable-next-line:typedef
  get confirmPassword() {
    return this.formLogin.get('confirmPassword');
  }

  // tslint:disable-next-line:typedef
  add() {
    console.log(this.formLogin.value);
  }

  // tslint:disable-next-line:typedef
  matchPassword(group: FormGroup) {
    let password: string;
    password = group.get('password').value;
    let confirmPassword: string;
    confirmPassword = group.get('confirmPassword').value;
    return (password === confirmPassword) ? null : {passwordNotMatch: true};
  }
}
