import { Component, inject, Input, numberAttribute, OnInit, Signal } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CustomerFormComponent } from '../customer-form/customer-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'acme-customer-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CustomerFormComponent],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  private customerService = inject( CustomerService );
  private route = inject(Router);

  @Input('data') customer!: Signal<Customer>;
  isCustomerFormActive = this.customerService.isCustomerFormActive;

  toggleForm(){
    this.isCustomerFormActive.set( !this.isCustomerFormActive() );
  }

  deleteCustomer(){
    this.customerService.deleteCustomer( this.customer().id as number ).subscribe( );
    this.route.navigate(['customers']);
  }

}