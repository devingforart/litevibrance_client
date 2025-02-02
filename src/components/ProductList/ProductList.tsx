// src/components/ProductList/ProductList.tsx
import React, { useState, useEffect } from 'react';
import './ProductList.scss';
import { Link, useSearchParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';
import ProductListItem from '../ProductListItem/ProductListItem';
import ViewSwitcher, { ViewMode } from '../ViewSwitcher/ViewSwitcher';

export interface Product {
  uuid: string;
  name: string;
  slug: string;
  price: number;
  photos?: string[];
  description?: string;
}

const ProductSkeleton = () => (
  <div className="product-card skeleton">
    <div className="product-card__image-wrapper skeleton-img"></div>
    <div className="product-card__info">
      <div className="skeleton-text skeleton-title"></div>
      <div className="skeleton-text skeleton-price"></div>
    </div>
  </div>
);

const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al obtener productos:', err);
        setLoading(false);
      });
  }, []);
  

  const normalizeString = (str: string) =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  const filteredProducts = products.filter((product) =>
    normalizeString(product.name).includes(normalizeString(searchQuery))
  );

  return (
    <div className="product-list container">
      <div className="product-list__header">
        <h2>Catálogo de Productos</h2>
        <ViewSwitcher viewMode={viewMode} setViewMode={setViewMode} isDarkMode={false} />
      </div>
      {searchQuery && filteredProducts.length === 0 ? (
        <p>No se encontraron productos para "{searchQuery}"</p>
      ) : (
        <>
          {loading ? (
            <div className="product-list__grid">
              {Array(8).fill(0).map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <>
              {viewMode === 'grid' && (
                <div className="product-list__grid">
                  {(searchQuery ? filteredProducts : products).map((product) => (
                    <ProductCard key={product.uuid} product={product} />
                  ))}
                </div>
              )}
              {viewMode === 'list' && (
                <div className="product-list__list">
                  {(searchQuery ? filteredProducts : products).map((product) => (
                    <ProductListItem key={product.uuid} product={product} />
                  ))}
                </div>
              )}
              {viewMode === 'detailed' && (
                <div className="product-list__detailed">
                  {(searchQuery ? filteredProducts : products).map((product) => (
                    <div key={product.uuid} className="product-detail">
                      <h3>{product.name}</h3>
                      <img
                        src={product.photos?.[0] || 'https://via.placeholder.com/600x400?text=No+Image'}
                        alt={product.name}
                      />
                      <p>{product.description}</p>
                      <p>${product.price.toFixed(2)}</p>
                      <Link to={`/products/${product.uuid}/${product.slug}`} className="btn-primary">
                        Ver detalle
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
