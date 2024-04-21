import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-checkout-modal',
  standalone: true,
  imports: [MatIconModule, MatTooltipModule, MatButtonModule],
  templateUrl: './checkout-modal.component.html',
  styleUrl: './checkout-modal.component.css',
})
export class CheckoutModalComponent {
  constructor(private router: Router) {}

  closeCheckoutModal() {
    (document.querySelector('#checkout-modal')! as HTMLDialogElement).close();
    this.router.navigate(['/products']);
  }
}
