// src/App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductList from './components/ProductList/ProductList';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import FloatingThemeSwitch from './components/ThemeSwitch/FloatingThemeSwitch';
import Notification from './components/Notification/Notification'; // Importamos el componente de notificaciones
import './components/sass/global.scss';
import Contact from './components/Contact/Contact';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <FloatingThemeSwitch />
      <main>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} /> {/* Nueva ruta */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Notification /> {/* Aquí se renderizan las notificaciones */}
    </div>
  );
};

export default App;
