import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './components/products/product-list/product-list.component';
import { HeaderComponent } from './components/base/header/header.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ProductListComponent, HeaderComponent, CartListComponent],
})
export class AppComponent {}
