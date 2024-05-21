import { Component, Input, numberAttribute } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { CustomerDetailsComponent } from '../../components/customer-details/customer-details.component';

@Component({
  selector: 'acme-customer-detail-page',
  standalone: true,
  imports: [CustomerDetailsComponent],
  templateUrl: './customer-detail-page.component.html',
  styleUrl: './customer-detail-page.component.scss'
})
export class CustomerDetailPageComponent {
  @Input({transform: numberAttribute}) id = 0;
  customer!: Customer;

  constructor( private customerService: CustomerService ){
  }

  ngOnInit(): void {
    this.customerService.getCustomerById( this.id ).subscribe( ( customer ) => {
      this.customer = customer;
    });
  }
}
