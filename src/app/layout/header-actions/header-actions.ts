import { Component } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatButton, MatIconModule, MatIconButton, RouterLink],
  selector: 'app-header-actions',
  styleUrl: './header-actions.css',
  templateUrl: './header-actions.html',
})
export class HeaderActions {}
