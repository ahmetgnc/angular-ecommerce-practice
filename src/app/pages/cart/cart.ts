import { Component, computed, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';
import { CartItem } from './cart-item/cart-item';
import { OrderSummary } from './order-summary/order-summary';

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummary],
  template: `
    <div class="p-6 flex flex-col gap-4">
    <h2 class="text-2xl">Shopping Cart</h2>
    @for (product of cart(); track product.id) {
        <app-cart-item [product]="product" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class Cart {
  cartService = inject(CartService);
  cart = computed(() => this.cartService.cart());
}
