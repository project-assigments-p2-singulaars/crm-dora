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
  // isLoggedIn!: boolean;

  // logIn( e: any ){
  //   this.isLoggedIn = true;
  //   console.log( e );
  //   // console.log( document.querySelector('.logoutBtn')?.setAttribute('disabled', 'false') );
  // }

  // logOut( e: any ){
  //   this.isLoggedIn = false;
  //   // e.target.disabled = false;

  //   console.log( e );
  // }

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
    this.authService.login( this.loginForm.value );
  }
}