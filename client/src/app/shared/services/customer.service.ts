import { inject, Injectable, signal } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  isCustomerFormActive = signal<boolean>(false);

  private http = inject( HttpClient );

  getAllCustomers(){
    return this.http.get<Customer[]>('http://localhost:3000/customers');
  }

  getCustomerById( id: number ){
    return this.http.get<Customer>('http://localhost:3000/customers/' + id);
  }

  deleteCustomer( id: number ){
    return this.http.delete<Customer>('http://localhost:3000/customers/' + id);
  }

  addCustomer( customer: Customer ){
    return this.http.post<Customer>('http://localhost:3000/customers', customer );
  }

  editCustomerById( id: number, customer: Customer ){
    return this.http.put<Customer>('http://localhost:3000/customers/' + id, customer );
  }
}
