import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { Login, LoginResponse } from '../../shared/interfaces/login';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject( HttpClient );
  router = inject( Router );
  storageService = inject( StorageService );
  isLogged = signal<boolean>(false);

  constructor(){
    if( this.storageService.getToken() ){
      this.isLogged.set( true );
    } else{
      this.isLogged.set( false );
    }
  }

  login( formData: Login ) {
    console.log(environment.API_URL)
    this.http.post<LoginResponse>( `${environment.API_URL}/login`, formData ).subscribe( ( response ) => {

      if( this.storageService.getToken() ){
        console.log( 'Interception process done' );

        this.isLogged.set( true );
        this.router.navigate(['dashboard']);
      }

    });
  }

  logout(){
    this.storageService.removeToken();
    this.storageService.removeUserId();
    this.isLogged.set( false );
    this.router.navigate(['login']);
  }
}
