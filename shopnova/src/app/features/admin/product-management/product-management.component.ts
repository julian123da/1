import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../products/services/product.service';
import { CurrencyFormatPipe } from '../../../shared/pipes/currency-format.pipe';

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyFormatPipe],
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {
  productService = inject(ProductService);
  products = signal(this.productService.getAll());
  search = signal('');

  filtered = () => {
    const t = this.search().toLowerCase();
    return this.products().filter(p => p.name.toLowerCase().includes(t));
  };
}
