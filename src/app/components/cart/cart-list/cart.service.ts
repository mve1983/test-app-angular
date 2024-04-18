import { Injectable } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { CartProduct, Product } from '../../../../types/general';

@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private productService: ProductsService) {}

  cart: CartProduct[] = [];

  addToCart(id: number): void {
    const index = this.cart.findIndex((i: CartProduct) => i.id === id);
    index >= 0
      ? (this.cart[index].quantity += 1)
      : this.productService
          .fetchSingleProduct(id)
          .subscribe((product: Product) => {
            const newProduct: CartProduct = { quantity: 1, ...product };
            this.cart = [newProduct, ...this.cart];
          });
    (
      document.querySelector('#in-cart-modal')! as HTMLDialogElement
    ).showModal();
  }
}
