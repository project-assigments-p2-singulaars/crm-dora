import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  isOrderFormActive = signal<boolean>(false);

  private http = inject( HttpClient );

  getAllOrders(){
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  getOrderById( id: number ){
    return this.http.get<Order>('http://localhost:3000/orders/' + id);
  }

  deleteOrder( id: number ){
    return this.http.delete<Order>('http://localhost:3000/orders/' + id);
  }

  addOrder( order: Order ){
    return this.http.post<Order>('http://localhost:3000/orders', order );
  }

  editOrderById( id: number, order: Order ){
    return this.http.put<Order>('http://localhost:3000/orders/' + id, order );
  }
}
