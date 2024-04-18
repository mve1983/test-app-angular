import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../types/product';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private http: HttpClient) {}

  fetchAllProducts(): Observable<Product[]> {
    return this.http
      .get('https://fakestoreapi.com/products')
      .pipe(map((res) => <Product[]>res));
  }
}
