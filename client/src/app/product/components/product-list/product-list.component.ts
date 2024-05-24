import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import { SearchComponent } from "../../../shared/components/search/search.component";
import { ProductService } from '../../../shared/services/product.service';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'acme-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [RouterLink, SearchComponent, MatTableModule, MatInputModule]
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  filteredProducts: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'author'];
  dataSource!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }


  onSearch(filteredProducts: Product[]) { 
    this.filteredProducts = filteredProducts;
  }

  trackProduct(index: number, product: Product) {
    return product.id;
  }
}