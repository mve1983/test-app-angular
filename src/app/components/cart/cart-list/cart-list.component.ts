import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { formatPrice } from '../../../../utils/utils';
import { CartProduct } from '../../../../types/general';
import { CheckoutModalComponent } from '../../base/modals/checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [
    NgFor,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    CheckoutModalComponent,
  ],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.css',
})
export class CartListComponent implements OnInit {
  constructor(private cart: CartService) {}

  formatPrice = formatPrice;
  cartProducts: CartProduct[] = [];

  ngOnInit(): void {
    const storedCart = localStorage.getItem('supadupastore');
    if (storedCart) {
      this.cart.cart = JSON.parse(storedCart);
    }
    this.cartProducts = this.cart.cart;
  }

  changeQuantityOrDelete(event: Event, id: number): void {
    const newQuantity = Number((event.target as HTMLSelectElement).value);
    newQuantity === 0
      ? this.cart.deleteItem(id)
      : this.cart.changeQuantity(id, newQuantity);
  }

  checkout(): void {
    (
      document.querySelector('#checkout-modal')! as HTMLDialogElement
    ).showModal();
    this.cart.checkout();
  }
}
