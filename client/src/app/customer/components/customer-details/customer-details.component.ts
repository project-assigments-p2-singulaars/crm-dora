import { Component, Input, numberAttribute, OnInit } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';

@Component({
  selector: 'acme-customer-details',
  standalone: true,
  imports: [],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent {
  @Input() customer!: Customer;

}