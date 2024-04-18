import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [[MatCardModule]],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: any = {}; 
  @Input() index: number = 0;

}
