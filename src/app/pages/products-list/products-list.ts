import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCard } from './product-card/product-card';
import { Product as ProductService } from '../../services/product';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``,
})
export class ProductsList implements OnInit {
  products = signal<Product[]>([]);
  productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products.set(products)
    })
  }
}
