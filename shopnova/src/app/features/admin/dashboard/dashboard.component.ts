import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../products/services/product.service';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, CurrencyFormatPipe],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private productService = inject(ProductService);

  totalProducts = computed(() => this.productService.getAll().length);
  outOfStock = computed(() => this.productService.getAll().filter(p => p.stock === 0).length);
  avgPrice = computed(() => {
    const all = this.productService.getAll();
    return all.reduce((s, p) => s + p.price, 0) / all.length;
  });
}
