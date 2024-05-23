import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { RouterLink } from '@angular/router';
import { SearchComponent } from '../../../shared/components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'acme-customer-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatInputModule, SearchComponent],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  @Input() customers!: Customer[];
  filteredCustomers: Customer[] = []

  constructor (private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(
      (data: Customer[]) => {
        this.customers = data;
        this.filteredCustomers = this.customers;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  onSearch(filteredCustomers: Customer[]) { 
    this.filteredCustomers = filteredCustomers;
  }

  displayedColumns: string[] = ['id', 'contactName', 'companyName', 'phone'];
  dataSource!: Customer[];
}
