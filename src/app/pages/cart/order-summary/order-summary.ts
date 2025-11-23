import { Component, computed, inject } from '@angular/core';
import { Cart as CartService } from '../../../services/cart';
import { PrimaryButton } from '../../../components/primary-button/primary-button';
@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButton],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-2xl">
        Order Summary
      </h2>
    <div class="flex flex-col gap-4">
    <div class="flex gap-4 mt-2">
    <span>Total:</span>
      <span class="text-lg font-bold">{{ "$" +totalAmount() }}</span>
    </div>
    <app-primary-button label="Proceed to Checkout" />
    </div>
  </div>
  `,
  styles: ``,
})
export class OrderSummary {
  cartService = inject(CartService);
  totalAmount = computed(() => this.cartService.cart().reduce((acc, product) => acc + product.price, 0));
}
