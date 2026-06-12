import { Injectable, inject, signal, computed } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { CartItem } from '../../core/models/order.model';
import { StorageService } from '../../core/services/storage.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private storage = inject(StorageService);
  private readonly STORAGE_KEY = 'shopnova_cart';

  private _items = signal<CartItem[]>(
    this.storage.get<CartItem[]>(this.STORAGE_KEY) ?? []
  );

  items = this._items.asReadonly();

  totalItems = computed(() => this._items().reduce((sum, i) => sum + i.quantity, 0));
  totalPrice = computed(() => this._items().reduce((sum, i) => sum + i.product.price * i.quantity, 0));

  add(product: Product): void {
    this._items.update(items => {
      const existing = items.find(i => i.product.id === product.id);
      if (existing) {
        return items.map(i => i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { product, quantity: 1 }];
    });
    this.persist();
  }

  remove(productId: string): void {
    this._items.update(items => items.filter(i => i.product.id !== productId));
    this.persist();
  }

  updateQuantity(productId: string, quantity: number): void {
    if (quantity <= 0) { this.remove(productId); return; }
    this._items.update(items => items.map(i => i.product.id === productId ? { ...i, quantity } : i));
    this.persist();
  }

  clear(): void {
    this._items.set([]);
    this.storage.remove(this.STORAGE_KEY);
  }

  private persist(): void {
    this.storage.set(this.STORAGE_KEY, this._items());
  }
}