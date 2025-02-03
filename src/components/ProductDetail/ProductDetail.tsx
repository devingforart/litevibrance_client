// src/components/ProductDetail/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProductDetail.scss';
import { useCart } from '../../context/CartContext';
import { useNotification } from '../../context/NotificationContext';

export interface Product {
  uuid: string;
  name: string;
  slug: string;
  price: number;
  photos?: string[];
  description?: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  // Extraemos tanto "add" como "clear" para usar ambos flujos
  const { add, clear } = useCart();
  const { addNotification } = useNotification();
  const [quantity, setQuantity] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`)
      .then(res => res.json())
      .then((data: Product) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener producto:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="product-detail container">Cargando...</div>;
  if (!product) {
    return (
      <div className="product-detail container">
        <h2>Producto no encontrado</h2>
        <Link to="/products" className="btn-primary">Volver al Catálogo</Link>
      </div>
    );
  }

  const photoArray = product.photos && product.photos.length > 0 ? product.photos : [];
  const mainImage = photoArray.length > 0
    ? photoArray[selectedPhoto]
    : 'https://via.placeholder.com/600x400?text=No+Image';

  // Flujo "Agregar al Carrito": agrega el producto sin afectar el resto de los artículos
  const handleAddToCart = () => {
    add(
      product.uuid,
      {
        name: product.name,
        image: product.photos?.[0] || 'https://via.placeholder.com/600x400?text=No+Image',
        price: product.price,
      },
      quantity
    );
    addNotification(`${product.name} (x${quantity}) agregado al carrito`, 'success');
  };

  // Flujo "Comprar Ahora": limpia el carrito, agrega solo este producto y redirige al checkout
  const handleBuyNow = async () => {
    await clear();
    await add(
      product.uuid,
      {
        name: product.name,
        image: product.photos?.[0] || 'https://via.placeholder.com/600x400?text=No+Image',
        price: product.price,
      },
      quantity
    );
    addNotification(`${product.name} (x${quantity}) agregado para compra inmediata`, 'success');
    navigate('/checkout');
  };

  return (
    <div className="product-detail container">
      <div className="product-detail__content">
        <div className="product-detail__gallery">
          <div className="product-detail__main-image">
            <img src={mainImage} alt={`${product.name} ${selectedPhoto + 1}`} />
          </div>
          <div className="product-detail__thumbnails">
            {photoArray.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${product.name} ${index + 1}`}
                className={selectedPhoto === index ? 'active' : ''}
                onClick={() => setSelectedPhoto(index)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail__info">
          <h2 className="product-detail__title">{product.name}</h2>
          <p className="product-detail__price">${product.price.toFixed(2)}</p>
          <p className="product-detail__description">{product.description}</p>
          <div className="product-detail__quantity">
            <label>Cantidad:</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(q => (q > 1 ? q - 1 : 1))} className="quantity-btn">–</button>
              <input type="text" readOnly value={quantity} />
              <button onClick={() => setQuantity(q => q + 1)} className="quantity-btn">+</button>
            </div>
          </div>
          <div className="product-detail__actions">
            <button onClick={handleAddToCart} className="btn-primary">Agregar al Carrito</button>
            <button onClick={handleBuyNow} className="btn-secondary">Comprar Ahora</button>
            <Link to="/products" className="btn-secondary">Volver al Catálogo</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
