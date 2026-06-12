import { Injectable } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Laptop Pro X', description: 'Potente laptop para desarrollo y diseno profesional.', price: 1299, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop', category: 'Electronica', stock: 10, rating: 4.8 },
    { id: '2', name: 'Auriculares Noise Pro', description: 'Cancelacion de ruido activa, 40h de bateria.', price: 249, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', category: 'Electronica', stock: 25, rating: 4.6 },
    { id: '3', name: 'Silla Ergonomica', description: 'Soporte lumbar ajustable para largas jornadas.', price: 399, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop', category: 'Hogar', stock: 8, rating: 4.5 },
    { id: '4', name: 'Monitor 4K 27"', description: 'Panel IPS, 144Hz, compatible con HDR.', price: 649, image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=400&h=300&fit=crop', category: 'Electronica', stock: 15, rating: 4.7 },
    { id: '5', name: 'Mochila Urban Pack', description: 'Resistente al agua, compartimento para laptop.', price: 89, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop', category: 'Accesorios', stock: 50, rating: 4.3 },
    { id: '6', name: 'Teclado Mecanico RGB', description: 'Switches tactiles, iluminacion RGB personalizable.', price: 129, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop', category: 'Electronica', stock: 30, rating: 4.4 },
    { id: '7', name: 'Lampara LED Escritorio', description: 'Luz calida/fria, intensidad regulable por tactil.', price: 59, image: 'https://images.unsplash.com/photo-1534281208534-25cf5ccbf60c?w=400&h=300&fit=crop', category: 'Hogar', stock: 40, rating: 4.2 },
    { id: '8', name: 'Mouse Inalambrico', description: 'Sensor de alta precision, hasta 70h sin carga.', price: 79, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop', category: 'Electronica', stock: 0, rating: 4.1 },
  ];

  getAll(): Product[] { return this.products; }
  getById(id: string): Product | undefined { return this.products.find(p => p.id === id); }
  getByCategory(category: string): Product[] { return this.products.filter(p => p.category === category); }
  getCategories(): string[] { return [...new Set(this.products.map(p => p.category))]; }
  search(term: string): Product[] {
    const t = term.toLowerCase();
    return this.products.filter(p => p.name.toLowerCase().includes(t) || p.description.toLowerCase().includes(t));
  }
}
