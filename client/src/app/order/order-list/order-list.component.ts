import { Component, Input, input } from '@angular/core';
import { OrderService } from '../../shared/services/order.service';

@Component({
  selector: 'acme-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent {
  @Input() orders!: Order[];
  filteredOrders: Order[] = []

  constructor (private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
        this.filteredOrders = this.orders;
      },
      (error: any) => {
        console.error('Error fetching products', error);
      }
    )
  }

  onSearch(filteredOrders: Order[]) {
    this.filteredOrders = filteredOrders
  }
}
