import { Component } from '@angular/core';

@Component({
  selector: 'acme-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoggedIn!: boolean;

  logIn( e: any ){
    this.isLoggedIn = true;
    console.log( e );
    // console.log( document.querySelector('.logoutBtn')?.setAttribute('disabled', 'false') );
  }

  logOut( e: any ){
    this.isLoggedIn = false;
    // e.target.disabled = false;

    console.log( e );
  }
}
