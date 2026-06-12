import { Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
import { CurrencyFormatPipe } from '../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, CurrencyFormatPipe],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  private fb = inject(FormBuilder);
  cart = inject(CartService);
  private router = inject(Router);

  success = signal(false);

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    city: ['', Validators.required],
    card: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]]
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    this.cart.clear();
    this.success.set(true);
    setTimeout(() => this.router.navigate(['/']), 3000);
  }
}
