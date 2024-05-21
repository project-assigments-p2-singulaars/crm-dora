import { Component, inject, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'acme-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  @Input() products!: Product[];

  trackProduct( index: number, product: Product ){
    return product.id;
  }

}