import { Component, inject } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/interfaces/product';
import {MatTableModule} from '@angular/material/table';
import { ButtonAddComponent } from '../../../shared/components/button-add/button-add.component';


@Component({
  selector: 'acme-product-list-page',
  standalone: true,
  imports: [ProductListComponent, ButtonAddComponent],
  templateUrl: './product-list-page.component.html',
  styleUrl: './product-list-page.component.scss'
})
export class ProductListPageComponent {

  products!: Product[];

  private productService = inject( ProductService );

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( ( products ) => {
      console.log( products );
      this.products = products;
    });
  }
  
}
