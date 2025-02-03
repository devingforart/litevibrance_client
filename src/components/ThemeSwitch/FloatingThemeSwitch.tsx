import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './FloatingThemeSwitch.scss';
import { FaSun, FaMoon } from 'react-icons/fa';

const FloatingThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';
  const icon = isDark ? <FaSun /> : <FaMoon />;

  return (
    <button className="floating-theme-switch" onClick={toggleTheme}>
      {icon}
    </button>
  );
};

export default FloatingThemeSwitch;
