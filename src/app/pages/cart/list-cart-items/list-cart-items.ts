import { Component, inject } from '@angular/core';
import { ViewPanel } from '../../../directives/view-panel';
import { EcommerceStore } from '../../../ecommerce-store';
import { ShowCartItems } from '../show-cart-items/show-cart-items';

@Component({
  imports: [ViewPanel, ShowCartItems],
  selector: 'app-list-cart-items',
  styleUrl: './list-cart-items.css',
  templateUrl: './list-cart-items.html',
})
export class ListCartItems {
  readonly store = inject(EcommerceStore);
}
