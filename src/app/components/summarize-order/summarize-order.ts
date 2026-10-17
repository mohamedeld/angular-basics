import { Component, computed, inject } from '@angular/core';
import { ViewPanel } from '../../directives/view-panel';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  imports: [ViewPanel],
  selector: 'app-summarize-order',
  styleUrl: './summarize-order.css',
  templateUrl: './summarize-order.html',
})
export class SummarizeOrder {
  readonly store = inject(EcommerceStore);
  readonly subTotal = this.store.cartTotal();
  readonly tax = computed(() => Math.round(0.05 * this.subTotal));
  readonly total = computed(() => (this.subTotal + this.tax())?.toFixed(2));
}
