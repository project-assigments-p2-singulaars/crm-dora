import { Component, inject, Input, numberAttribute, OnInit, Signal, signal } from '@angular/core';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interfaces/product';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'acme-product-detail-page',
  standalone: true,
  imports: [ProductDetailsComponent, ProductFormComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent implements OnInit {
  private productService = inject( ProductService );
  
  @Input({transform: numberAttribute}) id = 0;
  product = signal<Product>({id: 0, title: '', author: '', publicationDate: 1990, description:'', price: 0, genres: [], image: '', rating: 0});
  isProductFormActive = this.productService.isProductFormActive;

  ngOnInit(): void {
    this.productService.getProductById( this.id ).subscribe( ( product ) => {
      console.log( product );
      this.product.set( product );
    });
  }

}
