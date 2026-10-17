import { Component } from '@angular/core';
import { BackButton } from '../../components/back-button/back-button';
import { ListCartItems } from './list-cart-items/list-cart-items';
import { TeaseWishlist } from './tease-wishlist/tease-wishlist';
import { SummarizeOrder } from '../../components/summarize-order/summarize-order';
import { MatAnchor, MatButton } from '@angular/material/button';

@Component({
  imports: [BackButton, ListCartItems, TeaseWishlist, SummarizeOrder, MatAnchor, MatButton],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export default class Cart {}
