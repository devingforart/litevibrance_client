// src/components/ProductDetail/ProductDetail.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Product, dummyProducts } from '../../data/products';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPhoto, setSelectedPhoto] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const foundProduct = dummyProducts.find((p) => p.uuid === id);
    setProduct(foundProduct || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-2xl text-gray-700 animate-pulse">
          {t('loading', 'Cargando...')}
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('product_not_found', 'Producto no encontrado')}
          </h2>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            {t('back_to_catalog', 'Volver al catálogo')}
          </Link>
        </div>
      </div>
    );
  }

  const photoArray = product.photos && product.photos.length > 0 ? product.photos : [];
  const mainImage =
    photoArray.length > 0
      ? photoArray[selectedPhoto]
      : 'https://via.placeholder.com/600x400?text=No+Image';

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sección de imágenes */}
          <div className="space-y-6">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden animate-slide-up">
              <img
                src={mainImage}
                alt={`${product.name} ${selectedPhoto + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
            {photoArray.length > 1 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {photoArray.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`${product.name} ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedPhoto === index
                        ? 'ring-2 ring-blue-600 shadow-md'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedPhoto(index)}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sección de información */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-3xl animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>
            {/* <p className="text-2xl text-blue-600 font-semibold mb-6">
              ${product.price.toFixed(2)}
            </p> */}
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            <div className="flex justify-center">
              <Link
                to="/products"
                className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                {t('back_to_catalog', 'Volver al catálogo')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;