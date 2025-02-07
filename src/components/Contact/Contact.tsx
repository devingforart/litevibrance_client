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
        <button type="submit" className="btn-primary">{t('send_message')}</button>
      </form>

      <div className="contact__info">
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
      </div>
    </div>
  );
};

export default Contact;
