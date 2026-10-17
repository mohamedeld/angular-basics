import { Component, input } from '@angular/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatAnchor, MatButton, MatIcon, RouterLink],
  selector: 'app-back-button',
  styleUrl: './back-button.css',
  templateUrl: './back-button.html',
})
export class BackButton {
  label = input('');
  navigateTo = input<string>();
}
