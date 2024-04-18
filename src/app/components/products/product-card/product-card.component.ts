import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from '../../cart/cart-list/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTooltipModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor(private cart: CartService) {}

  @Input() product: any = {}; 
  @Input() index: number = 0;

  addToCart(id: number) {
    this.cart.addToCart(id)
  }

}
