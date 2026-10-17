import { Component, input, output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [MatIconButton, MatIcon],
  selector: 'app-qty-selector',
  styleUrl: './qty-selector.css',
  templateUrl: './qty-selector.html',
})
export class QtySelector {
  quantity = input(0);
  qtyUpdated = output<number>();
}
