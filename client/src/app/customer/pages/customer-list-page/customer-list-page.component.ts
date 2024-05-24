import { Component, inject } from '@angular/core';
import { CustomerService } from '../../../shared/services/customer.service';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerListComponent } from '../../components/customer-list/customer-list.component';
import { ButtonAddComponent } from '../../../shared/components/button-add/button-add.component';

@Component({
  selector: 'acme-customer-list-page',
  standalone: true,
  imports: [CustomerListComponent, ButtonAddComponent],
  templateUrl: './customer-list-page.component.html',
  styleUrl: './customer-list-page.component.scss'
})
export class CustomerListPageComponent {
  customers!: Customer[];
  private customerService = inject( CustomerService );

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe( ( customerList ) => {
      this.customers = customerList;
    } );
  }
}
