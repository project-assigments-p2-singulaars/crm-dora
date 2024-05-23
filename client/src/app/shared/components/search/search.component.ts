import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import db from '../../../../../../backend/db.json'
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { RouterLink } from '@angular/router';
import { Customer } from '../../interfaces/customer';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
  selector: 'acme-search',
  standalone: true,
  imports: [FormsModule, RouterLink, MatFormFieldModule, MatInputModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  @Input() products: Product[] = [];
  @Input() customers: Customer[] = [];
  @Input() orders: Order [] = []
  @Input() for!: 'product' | 'customer' | 'order';

  product: Product[] = [];
  inputValue: string = "";
  // filterArray!: Product[]
  filteredProducts: Product[] = [];
  filteredCustomers: Customer[] = []
  filteredOrders: Order[] = []
  @Output() searchEvent = new EventEmitter<any[]>();


  ngOnInit(): void {
    this.filteredProducts = this.products;
    this.filteredCustomers = this.customers;
    // this.filteredOrders = this.orders
  }

  search(){
    const searchValue = this.inputValue.trim().toLowerCase();
    if (this.for === 'product') {
      this.filteredProducts = this.products.filter(product =>
        product.title?.toLowerCase().includes(searchValue)
      );
      this.searchEvent.emit(this.filteredProducts);
    } else if (this.for === 'customer') {
      this.filteredCustomers = this.customers.filter(customer =>
        customer.name.toLowerCase().includes(searchValue)
      );
      this.searchEvent.emit(this.filteredCustomers);
    } else if (this.for === 'order') {
      this.filteredOrders = this.orders.filter(order => 
        order.id?.toLowerCase().includes(searchValue)
      );
      this.searchEvent.emit(this.filteredOrders);
    }
  }
  }


