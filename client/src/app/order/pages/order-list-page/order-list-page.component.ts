import { Component, inject } from '@angular/core';
import { Order } from '../../../shared/interfaces/order';
import { OrderService } from '../../../shared/services/order.service';
import { NewOrderButtonComponent } from '../../components/new-order-button/new-order-button.component';
import { OrderListComponent } from '../../components/order-list/order-list.component';

@Component({
  selector: 'acme-order-list-page',
  standalone: true,
  imports: [OrderListComponent, NewOrderButtonComponent],
  templateUrl: './order-list-page.component.html',
  styleUrl: './order-list-page.component.scss'
})
export class OrderListPageComponent {
  orders!: Order[];

  private orderService = inject( OrderService );

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe( ( orders ) => {
      this.orders = orders;
    });
  }
}
