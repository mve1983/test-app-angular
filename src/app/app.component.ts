import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductListComponent } from './components/products/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ProductListComponent, HeaderComponent],
})
export class AppComponent {}
