import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../products.service';

import { Product } from '../../../../types/general';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgFor,
    NgIf,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  initialProducts: Product[] = [];
  productsToRender: Product[] = [];
  categories: Set<string> = new Set([]);
  productCardObserver: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.productsService.fetchAllProducts().subscribe((products: Product[]) => {
      this.initialProducts = products;
      this.productsToRender = products;
      const categories = products.map((product: Product) => product.category);
      categories.unshift('all');
      this.categories = new Set(categories);
    });

    this.setupProductsCardObserver();
  }

  setupProductsCardObserver(): void {
    this.productCardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('animate-out');
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
            entry.target.classList.add('animate-out');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
  }

  filterByCategory(event: Event): void {
    this.productsToRender = [...this.initialProducts];

    (event.target as HTMLSelectElement).value === 'all'
      ? (this.productsToRender = [...this.initialProducts])
      : (this.productsToRender = this.initialProducts.filter(
          (product: Product) =>
            product.category.toLowerCase() ===
            ((event.target as HTMLSelectElement).value as string).toLowerCase()
        ));
  }

  searchByName(event: Event): void {
    this.productsToRender = [...this.initialProducts];

    (event.target as HTMLSelectElement).value === ''
      ? (this.productsToRender = [...this.initialProducts])
      : (this.productsToRender = this.initialProducts.filter(
          (product: Product) =>
            product.title
              .toLowerCase()
              .includes((event.target as HTMLSelectElement).value.toLowerCase())
        ));
  }

  closeInCartModal() {
    (document.querySelector('#in-cart-modal')! as HTMLDialogElement).close();
  }

  goToCart() {
    this.closeInCartModal();
    this.router.navigate(['/cart']);
  }
}
