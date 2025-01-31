// src/data/products.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: 'Audífonos Inalámbricos',
      price: 59.99,
      image:
        'https://images.unsplash.com/photo-1606813906572-cb9c504a6d4c?auto=format&fit=crop&w=600&q=80',
      description:
        'Estos audífonos ofrecen un sonido envolvente, conexión Bluetooth 5.0 y una batería que dura hasta 20 horas. Ideales para entrenamientos o para disfrutar de música sin cables.',
    },
    {
      id: 2,
      name: 'Smartwatch Deportivo',
      price: 129.99,
      image:
        'https://images.unsplash.com/photo-1586545177230-45fe08c59ecc?auto=format&fit=crop&w=600&q=80',
      description:
        'Este smartwatch combina diseño moderno con funciones deportivas y de monitoreo de actividad, perfecto para un estilo de vida activo.',
    },
    {
      id: 3,
      name: 'Cámara Reflex',
      price: 499.99,
      image:
        'https://images.unsplash.com/photo-1526179881101-60a42dcd27a5?auto=format&fit=crop&w=600&q=80',
      description:
        'Captura imágenes de alta calidad con esta cámara reflex, ideal para fotógrafos profesionales y aficionados avanzados.',
    },
    {
      id: 4,
      name: 'Laptop Ultrabook',
      price: 999.99,
      image:
        'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=600&q=80',
      description:
        'Una laptop ultrabook con un diseño elegante, rendimiento excepcional y portabilidad para trabajar desde cualquier lugar.',
    },
    {
      id: 5,
      name: 'Smartphone Pro',
      price: 899.99,
      image:
        'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&w=600&q=80',
      description:
        'El Smartphone Pro ofrece una experiencia premium con una pantalla de alta resolución, cámaras avanzadas y gran rendimiento.',
    },
    {
      id: 6,
      name: 'Tablet 10"',
      price: 349.99,
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
      description:
        'Una tablet versátil de 10", perfecta para entretenimiento, lectura y tareas de productividad.',
    },
  ];
  