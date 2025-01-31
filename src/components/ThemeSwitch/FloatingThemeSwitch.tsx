// src/components/ThemeSwitch/FloatingThemeSwitch.tsx

import React from 'react';
import { useTheme } from '../../context/ThemeContext'; // Tu custom hook
import './FloatingThemeSwitch.scss';
import { FaSun, FaMoon } from 'react-icons/fa';

const FloatingThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  // Determina el icono
  const isDark = theme === 'dark';
  const icon = isDark ? <FaSun /> : <FaMoon />;

  return (
    <button className="floating-theme-switch" onClick={toggleTheme}>
      {icon}
    </button>
  );
};

export default FloatingThemeSwitch;
