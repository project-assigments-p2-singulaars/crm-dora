import { inject, Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private http = inject( HttpClient );

  getAllCustomers(){
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  getCustomerById( id: number ){
    return this.http.get<Customer>('http://localhost:3000/customers/' + id);
  }
}
