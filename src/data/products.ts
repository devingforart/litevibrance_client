// src/data/products.ts
export interface Product {
  uuid: string;
  name: string;
  slug: string;
  price: number;
  photos?: string[];
  description?: string;
}
/*
export const products: Product[] = [
  {
    id: 3,
    name: 'Cámara Reflex Profesional',
    slug: slugify('Cámara Reflex Profesional'),  // Generamos el slug
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
    slug: slugify('Laptop Ultrabook'),  // Generamos el slug
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
    slug: slugify('Smartphone Pro'),  // Generamos el slug
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
    slug: slugify('Tablet 10"'),  // Generamos el slug
    price: 349.99,
    photos: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    ],
    description:
      'Una tablet versátil perfecta para entretenimiento, lectura y productividad.',
  },
];

*/