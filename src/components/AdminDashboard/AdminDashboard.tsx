// src/components/AdminDashboard/AdminDashboard.tsx
import React from 'react';
import './AdminDashboard.scss';

const AdminDashboard: React.FC = () => {
  return (
    <div className="admin-dashboard container">
      <h2>Panel de Administración</h2>
      <div className="admin-dashboard__sections">
        <div className="admin-dashboard__card">
          <h3>Productos</h3>
          <p>Gestiona el catálogo, precios, stock, etc.</p>
          <button className="btn-primary">Ir a Productos</button>
        </div>
        <div className="admin-dashboard__card">
          <h3>Pedidos</h3>
          <p>Revisa y gestiona los pedidos de los clientes.</p>
          <button className="btn-primary">Ir a Pedidos</button>
        </div>
        <div className="admin-dashboard__card">
          <h3>Usuarios</h3>
          <p>Administra roles, permisos y perfiles de usuarios.</p>
          <button className="btn-primary">Ir a Usuarios</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
