import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'acme-customer-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatInputModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
  @Input() customers!: Customer[];
  displayedColumns: string[] = ['id', 'companyName', 'contactName', 'phone'];
  dataSource!: Customer[];
}
