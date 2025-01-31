// src/components/ProductList/ProductList.tsx
import React from 'react';
import './ProductList.scss';
import ProductCard from '../ProductCard/ProductCard';
import { products } from '../../data/products';

const ProductList: React.FC = () => {
  return (
    <div className="product-list container">
      <h2>Catálogo de Productos</h2>
      <div className="product-list__grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
