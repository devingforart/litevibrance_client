// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import './ProductCard.scss';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card card">
      <img src={product.image} alt={product.name} className="product-card__img" />
      <div className="product-card__info">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}`} className="btn-primary">Ver detalle</Link>
      </div>
    </div>
  );
};

export default ProductCard;
