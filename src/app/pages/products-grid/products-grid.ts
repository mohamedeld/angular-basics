import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../modes/product';
import { ProductCard } from '../../components/product-card/product-card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatListItem, MatListItemTitle } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { EcommerceStore } from '../../ecommerce-store';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';

@Component({
  imports: [
    ProductCard,
    MatSidenavModule,
    MatListModule,
    MatListItem,
    MatListItemTitle,
    RouterLink,
    TitleCasePipe,
    ToggleWishlistButton,
  ],
  selector: 'app-products-grid',
  styleUrl: './products-grid.css',
  templateUrl: './products-grid.html',
})
export default class ProductsGrid {
  category = input<string>('all');
  readonly store = inject(EcommerceStore);

  addToCart(product: Product) {
    this.store.addToCart(product);
  }
}
