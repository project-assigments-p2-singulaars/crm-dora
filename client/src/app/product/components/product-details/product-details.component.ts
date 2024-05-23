import { Component, EventEmitter, inject, Input, Output, Signal, signal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { JsonPipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductService } from '../../../shared/services/product.service';
import { Router } from '@angular/router';


@Component({
  selector: 'acme-product-details',
  standalone: true,
  imports: [JsonPipe, MatCardModule, MatButtonModule, ProductFormComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private productService = inject( ProductService );
  private route = inject(Router);

  @Input('data') product!: Signal<Product>;
  isProductFormActive = this.productService.isProductFormActive;

  toggleForm(){
    this.isProductFormActive.set( !this.isProductFormActive() );
  }

  deleteProduct(){
    this.productService.deleteProduct( this.product().id as number ).subscribe( );
    this.route.navigate(['products']);
  }

}
