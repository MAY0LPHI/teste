import React, { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};

export default ThemeToggle;