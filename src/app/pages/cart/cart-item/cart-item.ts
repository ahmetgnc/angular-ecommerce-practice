import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { Cart as CartService } from '../../../services/cart';
import { Button } from '../../../components/button/button';

@Component({
  selector: 'app-cart-item',
  imports: [Button],
  template: `
       <div class="flex shadow-md bg-slate-100 p-6 rounded-xl">
        <img [src]="product().image" alt="Product Image" class="w-[50px] h-[50px] object-contain rounded-xl"/>
         <div class="flex flex-col ml-4">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-sm">{{'$' + product().price }}</span>
          </div>
          <div class="flex-1"></div>
          <app-button label="Remove" (buttonClicked)="cartService.removeFromCart(product())" />
        </div>
  `,
  styles: ``,
})
export class CartItem {
  product = input.required<Product>();
  cartService = inject(CartService);
}
