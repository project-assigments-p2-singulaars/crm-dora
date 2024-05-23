import { Component, inject, Input, numberAttribute, signal } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { OrderDetailsComponent } from '../../components/order-details/order-details.component';
import { OrderFormComponent } from '../../components/order-form/order-form.component';
import { Order } from '../../../shared/interfaces/order';

@Component({
  selector: 'acme-order-detail-page',
  standalone: true,
  imports: [OrderDetailsComponent, OrderFormComponent],
  templateUrl: './order-detail-page.component.html',
  styleUrl: './order-detail-page.component.scss'
})
export class OrderDetailPageComponent {
  private orderService = inject( OrderService );
  
  @Input({transform: numberAttribute}) id = 0;
  order = signal<Order>(
    {
      id: 0, 
      orderDate: '', 
      totalPrice: 0, 
      customerId: 0, 
      shippmentAddress: {
        addressLine: '',
        country: '',
        city: '',
        postalCode: '',
        phone: ''
      },
      products: []
    });

  isOrderFormActive = this.orderService.isOrderFormActive;

  ngOnInit(): void {
    this.orderService.getOrderById( this.id ).subscribe( ( order ) => {
      console.log( order );
      this.order.set( order );
    });
  }

}
