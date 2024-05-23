import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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
}
