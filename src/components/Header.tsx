import React from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1>Bible For You</h1>
            <ThemeToggle />
        </header>
    );
};

export default Header;