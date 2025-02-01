// src/data/products.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  photos: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Audífonos Inalámbricos',
    price: 59.99,
    photos: [
      'https://images.unsplash.com/photo-1606813906572-cb9c504a6d4c?auto=format&fit=crop&w=600&q=80'
    ],
    description:
      'Estos audífonos ofrecen un sonido envolvente, conexión Bluetooth 5.0 y una batería de larga duración.',
  },
  {
    id: 2,
    name: 'Smartwatch Deportivo',
    price: 129.99,
    photos: [
      'https://images.unsplash.com/photo-1586545177230-45fe08c59ecc?auto=format&fit=crop&w=600&q=80'
    ],
    description:
      'Este smartwatch combina diseño moderno y funciones deportivas, ideal para monitorizar tu actividad física.',
  },
  {
    id: 3,
    name: 'Cámara Reflex Profesional',
    price: 799.99,
    photos: [
      'https://picsum.photos/seed/camera1/600/400',
      'https://picsum.photos/seed/camera2/600/400',
      'https://picsum.photos/seed/camera3/600/400',
      'https://picsum.photos/seed/camera4/600/400'
    ],
    description:
      'Esta cámara reflex profesional cuenta con un sensor de alta resolución, rápida velocidad de disparo y ópticas intercambiables para capturar imágenes de alta calidad en cualquier situación. Ideal para fotógrafos profesionales y entusiastas avanzados.'
  },
  {
    id: 4,
    name: 'Laptop Ultrabook',
    price: 999.99,
    photos: [
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=600&q=80'
    ],
    description:
      'Una laptop elegante y potente que combina portabilidad y rendimiento para profesionales en movimiento.',
  },
  {
    id: 5,
    name: 'Smartphone Pro',
    price: 899.99,
    photos: [
      'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&w=600&q=80'
    ],
    description:
      'El Smartphone Pro ofrece una experiencia premium con una pantalla de alta resolución y cámaras avanzadas.',
  },
  {
    id: 6,
    name: 'Tablet 10"',
    price: 349.99,
    photos: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    ],
    description:
      'Una tablet versátil perfecta para entretenimiento, lectura y productividad.',
  },
];
