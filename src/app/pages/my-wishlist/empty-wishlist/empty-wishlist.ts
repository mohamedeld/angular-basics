import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  imports: [MatButton, MatIcon],
  selector: 'app-empty-wishlist',
  styleUrl: './empty-wishlist.css',
  templateUrl: './empty-wishlist.html',
})
export class EmptyWishlist {
  private readonly router = inject(Router);

  continueShopping(): void {
    this.router.navigate(['/products/all']);
  }
}
