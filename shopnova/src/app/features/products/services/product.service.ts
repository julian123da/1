import { Injectable } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    {
      id: '1',
      name: 'Laptop Pro X',
      description: 'Potente laptop para desarrollo y diseño profesional.',
      price: 1299,
      image: 'https://picsum.photos/seed/laptop-pro-x/400/300',
      category: 'Electrónica',
      stock: 10,
      rating: 4.8
    },
    {
      id: '2',
      name: 'Auriculares Noise Pro',
      description: 'Cancelación de ruido activa, 40h de batería.',
      price: 249,
      image: 'https://picsum.photos/seed/noise-cancel-headphones/400/300',
      category: 'Electrónica',
      stock: 25,
      rating: 4.6
    },
    {
      id: '3',
      name: 'Silla Ergonómica',
      description: 'Soporte lumbar ajustable para largas jornadas.',
      price: 399,
      image: 'https://picsum.photos/seed/ergonomic-chair-office/400/300',
      category: 'Hogar',
      stock: 8,
      rating: 4.5
    },
    {
      id: '4',
      name: 'Monitor 4K 27"',
      description: 'Panel IPS, 144Hz, compatible con HDR.',
      price: 649,
      image: 'https://picsum.photos/seed/4k-monitor-27/400/300',
      category: 'Electrónica',
      stock: 15,
      rating: 4.7
    },
    {
      id: '5',
      name: 'Mochila Urban Pack',
      description: 'Resistente al agua, compartimento para laptop.',
      price: 89,
      image: 'https://picsum.photos/seed/urban-backpack-waterproof/400/300',
      category: 'Accesorios',
      stock: 50,
      rating: 4.3
    },
    {
      id: '6',
      name: 'Teclado Mecánico RGB',
      description: 'Switches táctiles, iluminación RGB personalizable.',
      price: 129,
      image: 'https://picsum.photos/seed/rgb-mechanical-keyboard/400/300',
      category: 'Electrónica',
      stock: 30,
      rating: 4.4
    },
    {
      id: '7',
      name: 'Lámpara LED Escritorio',
      description: 'Luz cálida/fría, intensidad regulable por táctil.',
      price: 59,
      image: 'https://picsum.photos/seed/led-desk-lamp/400/300',
      category: 'Hogar',
      stock: 40,
      rating: 4.2
    },
    {
      id: '8',
      name: 'Mouse Inalámbrico',
      description: 'Sensor de alta precisión, hasta 70h sin carga.',
      price: 79,
      image: 'https://picsum.photos/seed/wireless-gaming-mouse/400/300',
      category: 'Electrónica',
      stock: 0,
      rating: 4.1
    },
  ];

  getAll(): Product[] { return this.products; }
  getById(id: string): Product | undefined { return this.products.find(p => p.id === id); }
  getByCategory(category: string): Product[] { return this.products.filter(p => p.category === category); }
  getCategories(): string[] { return [...new Set(this.products.map(p => p.category))]; }

  search(term: string): Product[] {
    const t = term.toLowerCase();
    return this.products.filter(p =>
      p.name.toLowerCase().includes(t) ||
      p.description.toLowerCase().includes(t)
    );
  }
}