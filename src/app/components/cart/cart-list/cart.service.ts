import { Injectable, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { CartProduct, Product } from '../../../../types/general';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private productService: ProductsService) {}

  cart: CartProduct[] = [];

  addToCart(id: number): void {
    const index = this.cart.findIndex((i: CartProduct) => i.id === id);
    if (index >= 0) {
      this.cart[index].quantity += 1;
      this.updateLocalStorage();
    } else {
      this.productService
        .fetchSingleProduct(id)
        .subscribe((product: Product) => {
          const newProduct: CartProduct = { quantity: 1, ...product };
          this.cart = [newProduct, ...this.cart];
          this.updateLocalStorage();
        });
    }

    (
      document.querySelector('#in-cart-modal')! as HTMLDialogElement
    ).showModal();
  }

  changeQuantity(id: number, quantity: number): void {
    const index = this.cart.findIndex((i: CartProduct) => i.id === id);
    this.cart[index].quantity = quantity;
    this.updateLocalStorage();
  }

  deleteItem(id: number): void {
    const index = this.cart.findIndex((i: CartProduct) => i.id === id);
    this.cart.splice(index, 1);
    this.updateLocalStorage();
  }

  checkout(): void {
    this.cart = [];
    this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.removeItem('supadupastore');
    localStorage.setItem('supadupastore', JSON.stringify(this.cart));
  }
}
