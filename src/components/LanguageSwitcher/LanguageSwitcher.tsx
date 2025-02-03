// src/components/LanguageSwitcher/LanguageSwitcher.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronDown } from 'react-icons/fa';
import './LanguageSwitcher.scss';

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' }
];

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
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
    <div className="language-switcher" ref={containerRef}>
      <button className="language-switcher__toggle" onClick={() => setOpen(!open)}>
        <span className="language-switcher__flag">{currentLanguage.flag}</span>
        <span className="language-switcher__label">{currentLanguage.label}</span>
        <FaChevronDown className="language-switcher__icon" />
      </button>
      {open && (
        <div className="language-switcher__menu">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="language-switcher__option"
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="language-switcher__flag">{lang.flag}</span>
              <span className="language-switcher__label">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
