import { Component, inject, Input, numberAttribute, signal } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { CustomerDetailsComponent } from '../../components/customer-details/customer-details.component';
import { CustomerFormComponent } from '../../components/customer-form/customer-form.component';

@Component({
  selector: 'acme-customer-detail-page',
  standalone: true,
  imports: [CustomerDetailsComponent, CustomerFormComponent],
  templateUrl: './customer-detail-page.component.html',
  styleUrl: './customer-detail-page.component.scss'
})
export class CustomerDetailPageComponent {

  private customerService = inject( CustomerService );
  
  @Input({transform: numberAttribute}) id = 0;
  customer = signal<Customer>({id: 0, companyName: '', contactName: '', phone: 0, email: '', address: '', orderIds: []});
  isCustomerFormActive = this.customerService.isCustomerFormActive;

  ngOnInit(): void {
    this.customerService.getCustomerById( this.id ).subscribe( ( customer ) => {
      this.customer.set( customer );
    });
  }
}
