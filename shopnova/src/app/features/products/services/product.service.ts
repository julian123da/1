import { Injectable } from '@angular/core';
import { Product } from '../../../core/models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Laptop Pro X', description: 'Potente laptop para desarrollo y diseno profesional.', price: 1299, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 10, rating: 4.8 },
    { id: '2', name: 'Auriculares Noise Pro', description: 'Cancelacion de ruido activa, 40h de bateria.', price: 249, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 25, rating: 4.6 },
    { id: '4', name: 'Monitor 4K 27"', description: 'Panel IPS, 144Hz, compatible con HDR.', price: 649, image: 'https://images.unsplash.com/photo-1527443195645-1133f7f28990?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 15, rating: 4.7 },
    { id: '6', name: 'Teclado Mecanico RGB', description: 'Switches tactiles, iluminacion RGB personalizable.', price: 129, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 30, rating: 4.4 },
    { id: '8', name: 'Mouse Inalambrico', description: 'Sensor de alta precision, hasta 70h sin carga.', price: 79, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 0, rating: 4.1 },
    { id: '9', name: 'Smartwatch Sport', description: 'Monitor de ritmo cardiaco, GPS y notificaciones.', price: 199, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 20, rating: 4.5 },
    { id: '10', name: 'Camara Mirrorless', description: 'Sensor APS-C, video 4K, ideal para creadores.', price: 899, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 5, rating: 4.9 },
    { id: '19', name: 'Altavoz Bluetooth', description: 'Sonido 360, resistente al agua IPX7.', price: 99, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 33, rating: 4.4 },
    { id: '20', name: 'Tablet 11 pulgadas', description: 'Pantalla OLED, lapiz incluido.', price: 549, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 14, rating: 4.7 },
    { id: '21', name: 'iPhone 17 Pro Max', description: 'Chip A19 Pro, camara de 48MP, titanio.', price: 1499, image: 'https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 12, rating: 4.9 },
    { id: '22', name: 'iPhone 17 Pro', description: 'Pantalla 6.3", chip A19 Pro, triple camara.', price: 1199, image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 18, rating: 4.8 },
    { id: '23', name: 'iPhone 17', description: 'Pantalla 6.1", chip A19, doble camara.', price: 899, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 25, rating: 4.7 },
    { id: '24', name: 'Samsung Galaxy S25 Ultra', description: 'Pantalla AMOLED 6.8", S Pen incluido, 200MP.', price: 1299, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 16, rating: 4.8 },
    { id: '25', name: 'Samsung Galaxy A55', description: 'Gama media, pantalla 120Hz, bateria 5000mAh.', price: 449, image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 30, rating: 4.4 },
    { id: '26', name: 'Google Pixel 9 Pro', description: 'IA integrada, camara computacional avanzada.', price: 999, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 14, rating: 4.6 },
    { id: '27', name: 'Xiaomi 14 Ultra', description: 'Camara Leica, carga rapida 90W.', price: 799, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 22, rating: 4.5 },
    { id: '40', name: 'Consola de Videojuegos', description: 'Ultima generacion, 1TB almacenamiento.', price: 499, image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 9, rating: 4.8 },
    { id: '41', name: 'Drone con Camara 4K', description: 'Estabilizador 3 ejes, 30 min de vuelo.', price: 399, image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 11, rating: 4.6 },
    { id: '42', name: 'Power Bank 20000mAh', description: 'Carga rapida USB-C, doble salida.', price: 39, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 60, rating: 4.3 },
    { id: '43', name: 'Impresora Multifuncional', description: 'Imprime, escanea y copia, WiFi.', price: 189, image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eabd?w=400&h=300&fit=crop', category: 'Tecnologia', stock: 16, rating: 4.3 },

    { id: '3', name: 'Silla Ergonomica', description: 'Soporte lumbar ajustable para largas jornadas.', price: 399, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop', category: 'Hogar', stock: 8, rating: 4.5 },
    { id: '7', name: 'Lampara LED Escritorio', description: 'Luz calida/fria, intensidad regulable por tactil.', price: 59, image: 'https://images.unsplash.com/photo-1534281208534-25cf5ccbf60c?w=400&h=300&fit=crop', category: 'Hogar', stock: 40, rating: 4.2 },
    { id: '13', name: 'Set de Sartenes', description: 'Antiadherentes, aptas para induccion.', price: 89, image: 'https://images.unsplash.com/photo-1584990347449-39b3c0fdec64?w=400&h=300&fit=crop', category: 'Hogar', stock: 22, rating: 4.6 },
    { id: '14', name: 'Cafetera Espresso', description: 'Presion de 15 bares, vaporizador de leche.', price: 279, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=300&fit=crop', category: 'Hogar', stock: 12, rating: 4.7 },
    { id: '50', name: 'Sofa Modular 3 Puestos', description: 'Tela resistente, patas de madera.', price: 899, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop', category: 'Hogar', stock: 6, rating: 4.6 },
    { id: '51', name: 'Juego de Sabanas King', description: '100% algodon, 400 hilos.', price: 79, image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop', category: 'Hogar', stock: 35, rating: 4.5 },
    { id: '52', name: 'Aspiradora Robot', description: 'Mapeo inteligente, control por app.', price: 349, image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop', category: 'Hogar', stock: 13, rating: 4.5 },
    { id: '53', name: 'Set de Vajilla 16 Piezas', description: 'Porcelana blanca, apta microondas.', price: 65, image: 'https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=400&h=300&fit=crop', category: 'Hogar', stock: 24, rating: 4.4 },
    { id: '54', name: 'Planta Artificial Decorativa', description: 'Aspecto realista, maceta de ceramica.', price: 29, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop', category: 'Hogar', stock: 50, rating: 4.3 },
    { id: '55', name: 'Espejo de Pared Redondo', description: 'Marco dorado, 60cm de diametro.', price: 89, image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=300&fit=crop', category: 'Hogar', stock: 18, rating: 4.5 },
    { id: '56', name: 'Organizador de Closet', description: 'Modular, 8 compartimentos.', price: 45, image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=400&h=300&fit=crop', category: 'Hogar', stock: 27, rating: 4.2 },

    { id: '30', name: 'Sushi Variado', description: 'Seleccion de nigiri, maki y uramaki frescos.', price: 24, image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop', category: 'Comida', stock: 40, rating: 4.8 },
    { id: '31', name: 'Pizza Margarita', description: 'Masa artesanal, mozzarella fresca y albahaca.', price: 14, image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&h=300&fit=crop', category: 'Comida', stock: 35, rating: 4.7 },
    { id: '32', name: 'Bowl de Vegetales', description: 'Mix de vegetales frescos asados y quinoa.', price: 12, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop', category: 'Comida', stock: 30, rating: 4.5 },
    { id: '33', name: 'Hamburguesa Gourmet', description: 'Carne angus, queso cheddar y vegetales frescos.', price: 16, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop', category: 'Comida', stock: 28, rating: 4.6 },
    { id: '34', name: 'Tacos Mexicanos', description: 'Tres tacos al pastor con cilantro y cebolla.', price: 10, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', category: 'Comida', stock: 45, rating: 4.7 },
    { id: '35', name: 'Ensalada Cesar', description: 'Lechuga romana, pollo grillado y aderezo cesar.', price: 11, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=400&h=300&fit=crop', category: 'Comida', stock: 32, rating: 4.4 },
    { id: '36', name: 'Pasta Alfredo', description: 'Fettuccine en salsa cremosa de parmesano.', price: 13, image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop', category: 'Comida', stock: 27, rating: 4.6 },
    { id: '37', name: 'Smoothie de Frutas', description: 'Mango, fresa y banano con yogurt natural.', price: 7, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop', category: 'Comida', stock: 50, rating: 4.5 },
    { id: '38', name: 'Donas Glaseadas', description: 'Pack de 6 donas variadas recien hechas.', price: 9, image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop', category: 'Comida', stock: 38, rating: 4.6 },
    { id: '39', name: 'Cafe de Especialidad', description: 'Grano arabica recien tostado y molido.', price: 8, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop', category: 'Comida', stock: 60, rating: 4.7 },
    { id: '60', name: 'Ramen Tonkotsu', description: 'Caldo de cerdo, huevo marinado y chashu.', price: 15, image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=300&fit=crop', category: 'Comida', stock: 25, rating: 4.8 },
    { id: '61', name: 'Poke Bowl de Atun', description: 'Atun fresco, arroz, aguacate y edamame.', price: 17, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop', category: 'Comida', stock: 22, rating: 4.7 },
    { id: '62', name: 'Brownie con Helado', description: 'Brownie tibio con helado de vainilla.', price: 8, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop', category: 'Comida', stock: 30, rating: 4.6 },
    { id: '63', name: 'Wrap de Pollo', description: 'Tortilla integral con pollo, lechuga y salsa.', price: 9, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop', category: 'Comida', stock: 33, rating: 4.4 },
    { id: '64', name: 'Sopa de Miso', description: 'Tofu, algas wakame y cebollin.', price: 6, image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop', category: 'Comida', stock: 40, rating: 4.3 },
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
