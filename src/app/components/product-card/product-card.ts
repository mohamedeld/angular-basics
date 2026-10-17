import { Component, computed, inject, input, output } from '@angular/core';
import { Product } from '../../modes/product';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  imports: [MatAnchor, MatIcon, MatButton, MatIconModule],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  readonly store = inject(EcommerceStore);
  productOutput = output<Product>();
  addToCart(product: Product) {
    this.productOutput.emit(product);
  }
  toggleWhistlist(product: Product) {
    this.store.toggleWishList(product);
  }
  isInWishlist = computed(() => this.store.isInWishList(this.product().id));
}
