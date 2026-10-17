import { Component, inject } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { EcommerceStore } from '../../ecommerce-store';
import { ProductCard } from '../../components/product-card/product-card';
import { RemoveWishlistButton } from '../../components/remove-wishlist-button/remove-wishlist-button';
import { MatAnchor, MatButton } from '@angular/material/button';
import { EmptyWishlist } from './empty-wishlist/empty-wishlist';

@Component({
  imports: [
    BackButton,
    ProductCard,
    RemoveWishlistButton,
    RemoveWishlistButton,
    MatAnchor,
    MatButton,
    EmptyWishlist,
  ],
  selector: 'app-my-wishlist',
  styleUrl: './my-wishlist.css',
  templateUrl: './my-wishlist.html',
})
export default class MyWishlist {
  store = inject(EcommerceStore);
}
