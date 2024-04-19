import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { CartService } from '../../cart/cart-list/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatTooltipModule, MatButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent implements AfterViewInit, OnDestroy {
  constructor(private cart: CartService) {}

  @Input() product: any = {};
  @Input() index: number = 0;
  @Input() productCardObserver: IntersectionObserver | null = null;

  ngAfterViewInit(): void {
    const elementsToObserve = document.querySelectorAll('.product-card');
    elementsToObserve.forEach((el) => this.productCardObserver!.observe(el));
  }

  ngOnDestroy(): void {
    this.productCardObserver!.disconnect()
  }

  addToCart(id: number) {
    this.cart.addToCart(id);
  }
}
