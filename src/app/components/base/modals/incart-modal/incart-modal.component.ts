import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-incart-modal',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatButtonModule],
  templateUrl: './incart-modal.component.html',
  styleUrl: './incart-modal.component.css',
})
export class IncartModalComponent {
  constructor(private router: Router) {}

  closeInCartModal() {
    (document.querySelector('#in-cart-modal')! as HTMLDialogElement).close();
  }

  goToCart() {
    this.closeInCartModal();
    this.router.navigate(['/cart']);
  }
}
