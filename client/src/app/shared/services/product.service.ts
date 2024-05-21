import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject( HttpClient );

  getAllProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById( id: number ){
    return this.http.get<Product>('http://localhost:3000/products/' + id);
  }

  deleteProduct(){
  }

  addProduct( product: Product ){
    return this.http.post<Product>('http://localhost:3000/products', product );
  }
}
