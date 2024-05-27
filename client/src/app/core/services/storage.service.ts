import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getToken() {
    return window.localStorage.getItem('token');
  }

  setToken( token: string ){
    window.localStorage.setItem('token', token );
  }

  removeToken(){
    window.localStorage.removeItem('token');
  }


  getUserId(){
    return window.localStorage.getItem('userId');
  }

  setUserId( id: string ){
    window.localStorage.setItem('userId', id );
  }

  removeUserId(){
    window.localStorage.removeItem('userId');
  }
}
