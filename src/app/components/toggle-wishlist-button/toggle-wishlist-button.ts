import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../modes/product';
import { MatIconButton } from '@angular/material/button';

@Component({
  imports: [MatIcon, MatIconButton],
  selector: 'app-toggle-wishlist-button',
  styleUrl: './toggle-wishlist-button.css',
  templateUrl: './toggle-wishlist-button.html',
})
export class ToggleWishlistButton {
  product = input.required<Product>();
  readonly store = inject(EcommerceStore);
  toggleWhistlist(product: Product) {
    this.store.toggleWishList(product);
  }
  isInWishlist = computed(() => this.store.isInWishList(this.product().id));
}
