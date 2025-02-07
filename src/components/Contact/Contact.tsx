// src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
import './Contact.scss';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { addNotification } = useNotification();
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(t('purchase_success'), 'success');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className="contact container">
      <h2>{t('contact_us')}</h2>
      <p>{t('contact_us_message')}</p>

      {/* Contenedor para agrupar formulario y mapa */}
      <div className="contact__form-map">
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-group">
            <label htmlFor="name">{t('name')}</label>
            <input
              type="text"
              id="name"
              placeholder={t('your_name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="email">{t('email')}</label>
            <input
              type="email"
              id="email"
              placeholder={t('your_email')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="subject">{t('subject')}</label>
            <input
              type="text"
              id="subject"
              placeholder={t('message_subject')}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="contact__form-group">
            <label htmlFor="message">{t('message')}</label>
            <textarea
              id="message"
              placeholder={t('your_message')}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-primary">
            {t('send_message')}
          </button>
        </form>

        {/* Bloque del mapa */}
        <div className="contact__map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.092911429665!2d-122.40641738468165!3d37.78583497975714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0a3d1a7b%3A0x2dd33f8d0b0e1f9f!2sYour%20Office%20Address!5e0!3m2!1sen!2s!4v1610000000000!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la Oficina"
          ></iframe>
        </div>
      </div>

  {/*     <div className="contact__info">
        <div className="contact__info-item">
          <h3>{t('address')}</h3>
          <p>{t('dummy_address')}</p>
        </div>
        <div className="contact__info-item">
          <h3>{t('phone')}</h3>
          <p>{t('dummy_phone')}</p>
        </div>
        <div className="contact__info-item">
          <h3>{t('email')}</h3>
          <p>{t('contact_email')}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
