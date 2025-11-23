import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product as ProductModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class Product {
  http = inject(HttpClient);
  async getProducts(): Promise<ProductModel[]> {
    const url = 'https://fakestoreapi.com/products';
    const products$ = this.http.get<ProductModel[]>(url);
    const products = firstValueFrom(products$)
    return products;
  }
}
