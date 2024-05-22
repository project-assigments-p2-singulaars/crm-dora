import { Component, Input, Signal, signal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { JsonPipe } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductFormComponent } from '../product-form/product-form.component';


@Component({
  selector: 'acme-product-details',
  standalone: true,
  imports: [JsonPipe, MatCardModule, MatButtonModule, ProductFormComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input('data') product!: Signal<Product>;
  productFormActive = signal(false);

  toggleForm(){
    this.productFormActive.set( !this.productFormActive() )
  }

}
