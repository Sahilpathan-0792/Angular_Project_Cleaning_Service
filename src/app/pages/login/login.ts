import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginForm;
  returnUrl: string = '/services';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: Auth
  ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    //get return url from query params (if redirected by guard)
    const url = this.route.snapshot.queryParams['returnUrl'];
    if (url) {
      this.returnUrl = url;
    }
  }
    login(){
      if (this.loginForm.valid) {
        this.auth.login();
        this.router.navigate([this.returnUrl]);
      }
    }
}
