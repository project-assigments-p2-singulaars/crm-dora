import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatInput, MatLabel, MatSuffix } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'acme-login',
  standalone: true,
  imports: [ReactiveFormsModule ,MatIcon, MatFormField, MatInput, MatButton, MatSuffix, MatLabel],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject( AuthService );

  hide= true;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ])
   });


  submitLogin(){
    console.log('login done')
    this.authService.login(this.loginForm.value );
  }
}