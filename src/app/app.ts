import { Component, computed, linkedSignal, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';

interface ShippingOption {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, Header],
})
export class App {}
