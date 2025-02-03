// src/components/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos JSON con las traducciones
import translationEN from '../locales/en/translation.json';
import translationES from '../locales/es/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React ya se encarga de escapar
    },
  });

export default i18n;
