import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
import { Cart as CartService } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  template: `
  <div class="bg-white shadow-md border rounded-xl p-6 flex flex-col relative">
    <div class="mx-auto">
    <img  [src]="product().image" alt="Product Image" class="w-[200px] h-[100px] object-contain rounded-xl mb-4"/>  
    </div>
    <div class="flex flex-col mt-2">
      <span class="text-md font-bold">{{ product().title }}</span>
      <span class="text-sm">{{'$' + product().price }}</span>
      <app-primary-button label="Add to Cart" class="mt-3" (buttonClicked)="cartService.addToCart(product())"/>
    </div>
    
    <span 
    class="absolute top-2 right-3 text-sm font-bold"
    [class]="product().stock ? 'text-green-500' : 'text-red-500'"
    >
     @if (!product().stock) {
    Out of Stock
    } @else {
    {{ product().stock }} left
    }
    </span>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  product = input.required<Product>()
  cartService = inject(CartService);
}
