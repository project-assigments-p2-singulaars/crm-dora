import { Component, Input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Order } from '../../../shared/interfaces/order';

@Component({
  selector: 'acme-order-list',
  standalone: true,
  imports: [RouterLink, MatTableModule, MatInputModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  @Input() orders!: Order[];
  displayedColumns: string[] = ['numOrder', 'orderDate', 'totalPrice', 'customerId'];
  dataSource!: Order[];
}
