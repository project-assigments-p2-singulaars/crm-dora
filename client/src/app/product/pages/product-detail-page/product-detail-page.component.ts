import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interfaces/product';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';

@Component({
  selector: 'acme-product-detail-page',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent implements OnInit {
  @Input({transform: numberAttribute}) id = 0;
  product!: Product;

  private productService = inject( ProductService );

  ngOnInit(): void {
    this.productService.getProductById( this.id ).subscribe( ( product ) => {
      this.product = product;
    });
  }
}
