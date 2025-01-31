// src/components/ProductDetail/ProductDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetail.scss';
import { useCart } from '../../context/CartContext';

// Mismo tipo de Product
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Podrías extraer la misma lista de productos de un servicio o de la DB
// De momento, usaremos un array local para simular
const products: Product[] = [
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

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Convertimos id a número para buscar en el array
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="product-detail container">
        <h2>Producto no encontrado</h2>
        <Link to="/products" className="btn-primary">Volver al Catálogo</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} agregado al carrito`);
  };

  return (
    <div className="product-detail container">
      <div className="product-detail__content">
        <img src={product.image} alt={product.name} />
        <div className="product-detail__info">
          <h2>{product.name}</h2>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>
          <p className="product-detail__description">
            Aquí podrías mostrar una descripción más larga, especificaciones técnicas,
            reseñas de otros usuarios, etc.
          </p>
          <div className="product-detail__actions">
            <button onClick={handleAddToCart} className="btn-primary">
              Agregar al Carrito
            </button>
            <Link to="/products" className="btn-primary">
              Volver al Catálogo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
