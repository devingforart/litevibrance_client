// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
];

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation(); // Asegúrate de definir `t` aquí
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <button
        className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-gray-900 font-semibold hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label={t('select_language', 'Seleccionar idioma')}
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-sm">{currentLanguage.label}</span>
        <FaChevronDown
          className={`text-gray-600 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-40 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl animate-slide-down">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center space-x-2 w-full px-4 py-2 text-gray-900 hover:bg-blue-100 focus:bg-blue-100 focus:outline-none transition-colors"
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;