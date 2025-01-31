// src/components/ProductModal/ProductModal.tsx

import React from 'react';
import './ProductModal.scss';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <div className="product-modal">
      {/* Fondo oscuro/overlay */}
      <div className="product-modal__overlay" onClick={onClose}></div>
      
      {/* Contenido del modal */}
      <div className="product-modal__content card">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Precio: ${product.price.toFixed(2)}</p>
        <p>Descripción extendida o características del producto...</p>
        
        <button className="btn-primary" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
