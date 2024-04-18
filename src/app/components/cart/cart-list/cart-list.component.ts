import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from './cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent, NgFor],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent {
  constructor(private cart: CartService) {}

  cartProducts = this.cart.cart;
}
