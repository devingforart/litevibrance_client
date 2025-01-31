// src/components/ProductList/ProductList.tsx
import React from 'react';
import './ProductList.scss';
import ProductCard from '../ProductCard/ProductCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Productos más realistas (puedes cambiarlos libremente)
const dummyProducts: Product[] = [
  {
    id: 1,
    name: 'Audífonos Inalámbricos',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1606813906572-cb9c504a6d4c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Smartwatch Deportivo',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1586545177230-45fe08c59ecc?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Cámara Reflex',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1526179881101-60a42dcd27a5?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Laptop Ultrabook',
    price: 999.99,
    image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Smartphone Pro',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Tablet 10"',
    price: 349.99,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
  },
];

const ProductList: React.FC = () => {
  return (
    <div className="product-list container">
      <h2>Catálogo de Productos</h2>
      <div className="product-list__grid">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
