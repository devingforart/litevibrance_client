// src/components/NotFound/NotFound.tsx
import React from 'react';
import './NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="notfound container">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default NotFound;
