import { Component, computed, inject, input } from '@angular/core';
import { CartItem } from '../../../modes/cart';
import { QtySelector } from '../../../components/qty-selector/qty-selector';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../ecommerce-store';

@Component({
  imports: [QtySelector, MatIconButton, MatIcon],
  selector: 'app-show-cart-items',
  styleUrl: './show-cart-items.css',
  templateUrl: './show-cart-items.html',
})
export class ShowCartItems {
  readonly store = inject(EcommerceStore);
  cartItem = input.required<CartItem>();
  total = computed(() => (this.cartItem()?.product.price * this.cartItem()?.quantity)?.toFixed(2));
  isInWishlist = computed(() => this.store.isInWishList(this.cartItem().product.id));
}
