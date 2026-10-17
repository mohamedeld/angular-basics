import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { MatIcon } from '@angular/material/icon';
import { EcommerceStore } from '../../../ecommerce-store';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ViewPanel, MatIcon, MatAnchor, MatButton, RouterLink],
  selector: 'app-tease-wishlist',
  styleUrl: './tease-wishlist.css',
  templateUrl: './tease-wishlist.html',
})
export class TeaseWishlist {
  store = inject(EcommerceStore);
}
