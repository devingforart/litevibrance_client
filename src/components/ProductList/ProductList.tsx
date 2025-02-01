// src/components/ProductList/ProductList.tsx
import React, { useState } from 'react';
import './ProductList.scss';
import { products } from '../../data/products';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import ProductListItem from '../ProductListItem/ProductListItem';
import ViewSwitcher, { ViewMode } from '../ViewSwitcher/ViewSwitcher';

const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Función para normalizar las cadenas (sin acentos y en minúsculas)
  const normalizeString = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filteredProducts = products.filter((product) =>
    normalizeString(product.name).includes(normalizeString(searchQuery))
  );

  return (
    <div className="product-list container">
      <div className="product-list__header">
        <h2>Catálogo de Productos</h2>
        {/* Ubicado en la cabecera para que sea visible y contextual */}
        <ViewSwitcher viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {searchQuery && filteredProducts.length === 0 ? (
        <p>No se encontraron productos para "{searchQuery}"</p>
      ) : (
        <>
          {viewMode === 'grid' && (
            <div className="product-list__grid">
              {(searchQuery ? filteredProducts : products).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {viewMode === 'list' && (
            <div className="product-list__list">
              {(searchQuery ? filteredProducts : products).map((product) => (
                <ProductListItem key={product.id} product={product} />
              ))}
            </div>
          )}

          {viewMode === 'detailed' && (
            <div className="product-list__detailed">
              {(searchQuery ? filteredProducts : products).map((product) => (
                <div key={product.id} className="product-list__detailed-item">
                  <img
                    src={
                      product.photos && product.photos.length > 0
                        ? product.photos[0]
                        : 'https://via.placeholder.com/300x200?text=No+Image'
                    }
                    alt={product.name}
                  />
                  <div className="detailed-info">
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>
                    <p className="description">
                      Descripción extendida o detalles adicionales del producto...
                    </p>
                    <a href={`/products/${product.id}`} className="btn-primary">
                      Ver detalle
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
