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

const dummyProducts: Product[] = [
  { id: 1, name: 'Producto A', price: 29.99, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Producto B', price: 19.99, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Producto C', price: 39.99, image: 'https://via.placeholder.com/200' },
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
