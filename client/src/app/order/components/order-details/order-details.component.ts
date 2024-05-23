import { Component, inject, Input, Signal } from '@angular/core';
import { OrderFormComponent } from '../order-form/order-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { OrderService } from '../../../shared/services/order.service';
import { Router } from '@angular/router';
import { Order } from '../../../shared/interfaces/order';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'acme-order-details',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, OrderFormComponent, JsonPipe],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {
  private orderService = inject( OrderService );
  private route = inject(Router);

  @Input('data') order!: Signal<Order>;
  isOrderFormActive = this.orderService.isOrderFormActive;

  toggleForm(){
    this.isOrderFormActive.set( !this.isOrderFormActive() );
  }

  deleteOrder(){
    this.orderService.deleteOrder( this.order().id as number ).subscribe( );
    this.route.navigate(['orders']);
  }

}
