import { Component, inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatBadge } from '@angular/material/badge';
import { EcommerceStore } from '../../ecommerce-store';

@Component({
  imports: [MatButton, MatIconModule, MatIconButton, RouterLink, MatBadge],
  selector: 'app-header-actions',
  styleUrl: './header-actions.css',
  templateUrl: './header-actions.html',
})
export class HeaderActions {
  store = inject(EcommerceStore);
}
