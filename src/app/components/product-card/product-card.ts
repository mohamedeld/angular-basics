import { Component, input, output } from '@angular/core';
import { Product } from '../../modes/product';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatAnchor, MatIcon, MatButton, MatIconModule],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  product = input.required<Product>();
  productOutput = output<Product>();
  addToCart(product: Product) {
    this.productOutput.emit(product);
  }
}
