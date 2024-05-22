import { Component, Input, Signal } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'acme-product-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input('data') product!: Signal<Product>;

}
