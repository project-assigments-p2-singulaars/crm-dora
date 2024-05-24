import { Component, inject } from '@angular/core';
import { Order } from '../../../shared/interfaces/order';
import { OrderService } from '../../../shared/services/order.service';
import { OrderListComponent } from '../../components/order-list/order-list.component';
import { ButtonAddComponent } from '../../../shared/components/button-add/button-add.component';

@Component({
  selector: 'acme-order-list-page',
  standalone: true,
  imports: [OrderListComponent, ButtonAddComponent],
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
