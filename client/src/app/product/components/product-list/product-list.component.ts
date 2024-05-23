import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/interfaces/product';
import { RouterLink } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@Component({
    selector: 'acme-product-list',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [RouterLink, MatTableModule, MatInputModule]
})

export class ProductListComponent {
  @Input() products!: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'author'];
  dataSource!: Product[];

  // trackProduct( index: number, product: Product ){
  //   return product.id;
  // }

}