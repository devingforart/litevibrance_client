// src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
import './Contact.scss';

const Contact: React.FC = () => {
  const { addNotification } = useNotification();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario a tu backend o servicio
    addNotification('Mensaje enviado con éxito!', 'success');

    // Limpiar el formulario
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="contact container">
      <h2>Contáctanos</h2>
      <p>Si tienes alguna duda o comentario, ¡no dudes en escribirnos!</p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            placeholder="Tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="subject">Asunto</label>
          <input
            type="text"
            id="subject"
            placeholder="Asunto del mensaje"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="contact__form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            placeholder="Escribe tu mensaje aquí"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-primary">Enviar Mensaje</button>
      </form>

      <div className="contact__info">
        <div className="contact__info-item">
          <h3>Dirección</h3>
          <p>Calle Falsa 123, Ciudad, País</p>
        </div>
        <div className="contact__info-item">
          <h3>Teléfono</h3>
          <p>+1 234 567 890</p>
        </div>
        <div className="contact__info-item">
          <h3>Email</h3>
          <p>info@litevibrance.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
