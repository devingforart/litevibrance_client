// src/components/ViewSwitcher/ViewSwitcher.tsx
import React, { useState, useRef, useEffect } from 'react';
import { FaTh, FaList, FaRegSquare } from 'react-icons/fa';
import './ViewSwitcher.scss';

export type ViewMode = 'grid' | 'list' | 'detailed';

interface ViewSwitcherProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  isDarkMode: boolean;  // Prop para manejar el modo oscuro
}

const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ viewMode, setViewMode, isDarkMode }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen(!open);

  const handleOptionClick = (mode: ViewMode) => {
    setViewMode(mode);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const getMainIcon = () => {
    if (viewMode === 'grid') return <FaTh />;
    if (viewMode === 'list') return <FaList />;
    return <FaRegSquare />;
  };

  return (
    <div className={`view-switcher ${isDarkMode ? 'dark-mode' : ''}`} ref={containerRef}>
      <button className="view-switcher__toggle" onClick={toggleMenu}>
        {getMainIcon()}
      </button>
      {open && (
        <div className="view-switcher__menu">
          <button onClick={() => handleOptionClick('grid')}>
            <FaTh /> <span>Grilla</span>
          </button>
          <button onClick={() => handleOptionClick('list')}>
            <FaList /> <span>Lista</span>
          </button>
          <button onClick={() => handleOptionClick('detailed')}>
            <FaRegSquare /> <span>Detallada</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ViewSwitcher;
