import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import db from '../../../../../backend/db.json'
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  isProductFormActive = signal<boolean>(false);

  url= "http://localhost:3000/products";

  private http = inject( HttpClient );

  getAllProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProductById( id: number ){
    return this.http.get<Product>(this.url + '/' + id);
  }

  deleteProductById(id: number){
    return this.http.delete<Product>(this.url + '/' + id)
  }

  addProduct( product: Product ){
    return this.http.post<Product>(this.url, product );
  }

  editProductById( id: number, product: Product ){
    return this.http.put<Product>('http://localhost:3000/products/' + id, product );
  }
}