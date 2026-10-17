import { Component, inject, input } from '@angular/core';
import { EcommerceStore } from '../../ecommerce-store';
import { Product } from '../../modes/product';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  imports: [MatIcon, MatIconButton],
  selector: 'app-remove-wishlist-button',
  styleUrl: './remove-wishlist-button.css',
  templateUrl: './remove-wishlist-button.html',
})
export class RemoveWishlistButton {
  product = input.required<Product>();
  readonly store = inject(EcommerceStore);
  removeWishlist() {
    this.store.removeFromWishList(this.product()?.id);
  }
}
