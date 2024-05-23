import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import db from '../../../../../backend/db.json'
import { Title } from '@angular/platform-browser';

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
