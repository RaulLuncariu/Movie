import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
<<<<<<< HEAD
  styleUrls: ['./login.component.css']
=======
  styleUrls: ['./login.component.scss']
>>>>>>> dbec1ef8b8cf2960a300b6b7ae6857a871791f9f
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isUsernameValid: boolean = true;
  error: any = null;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
    this.loginService
      .errorSubject
      .subscribe((errorMessage: any) => {
        this.error = errorMessage;
      });
  }

  validateUsername(): void {
    const pattern = RegExp(/^[\w-.]*$/);
    if (pattern.test(this.username)) {
      this.isUsernameValid = true;
    } else {
      this.isUsernameValid = false;
    }
  }

  onKey(event: any, type: string) {
    if (type === 'username') {
      this.username = event.target.value;
      this.validateUsername();
    } else if (type === 'password') {
      this.password = event.target.value;
    }
  }

  onSubmit() {
    if (this.isUsernameValid) {
      this.loginService
        .login(this.username, this.password);
    }
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> dbec1ef8b8cf2960a300b6b7ae6857a871791f9f
