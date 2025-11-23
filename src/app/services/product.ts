import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product as ProductModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class Product {
  http = inject(HttpClient);
  getProducts(): Observable<ProductModel[]> {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get<ProductModel[]>(url);
  }
}
