import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  searchTerm = signal('');
  selectedCategory = signal('');

  categories = this.productService.getCategories();

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.selectedCategory.set(params['category'] ?? '');
    });
  }

  filtered = computed(() => {
    let products = this.productService.getAll();
    if (this.searchTerm()) {
      products = products.filter(p =>
        p.name.toLowerCase().includes(this.searchTerm().toLowerCase())
      );
    }
    if (this.selectedCategory()) {
      products = products.filter(p => p.category === this.selectedCategory());
    }
    return products;
  });
}
