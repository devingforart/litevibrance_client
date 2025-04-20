// src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import { useNotification } from '../../context/NotificationContext';
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
    addNotification(t('purchase_success', 'Mensaje enviado con éxito'), 'success');
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-6 animate-fade-in">
          {t('contact_us', 'Contáctanos')}
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '200ms' }}>
          {t('contact_us_message', 'Estamos aquí para ayudarte. Completa el formulario o visítanos en nuestra ubicación.')}
        </p>

        {/* Contenedor para formulario y mapa */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <form
            className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 space-y-6 animate-slide-up"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-900 font-semibold">
                {t('name', 'Nombre')}
              </label>
              <input
                type="text"
                id="name"
                placeholder={t('your_name', 'Tu nombre')}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-900 font-semibold">
                {t('email', 'Correo electrónico')}
              </label>
              <input
                type="email"
                id="email"
                placeholder={t('your_email', 'Tu correo electrónico')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-gray-900 font-semibold">
                {t('subject', 'Asunto')}
              </label>
              <input
                type="text"
                id="subject"
                placeholder={t('message_subject', 'Asunto del mensaje')}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-gray-900 font-semibold">
                {t('message', 'Mensaje')}
              </label>
              <textarea
                id="message"
                placeholder={t('your_message', 'Tu mensaje')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors h-32 resize-y"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              {t('send_message', 'Enviar mensaje')}
            </button>
          </form>

          {/* Mapa */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.401752031533!2d-58.5531061!3d-34.4926978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb07612f13e43%3A0x8229b915a44d67b0!2sABB%2C%20Blanco%20Encalada%20197%2C%20B1642%20San%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1738956843811!5m2!1sen!2sar"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('office_location', 'Ubicación de la Oficina')}
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('address', 'Dirección')}
            </h3>
            <p className="text-gray-700">
              {t('dummy_address', 'Av. Principal 123, Ciudad, País')}
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('phone', 'Teléfono')}
            </h3>
            <p className="text-gray-700">
              {t('dummy_phone', '+123 456 7890')}
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t('email', 'Correo electrónico')}
            </h3>
            <p className="text-gray-700">
              {t('contact_email', 'contacto@empresa.com')}
            </p>
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Contact;