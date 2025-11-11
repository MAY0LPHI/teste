import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import VerseList from '../components/VerseList';
import ThemeToggle from '../components/ThemeToggle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <div className="home-container">
            <Header />
            <ThemeToggle />
            <SearchBar onSearch={handleSearch} />
            <VerseList searchTerm={searchTerm} />
            <Footer />
        </div>
    );
};

export default Home;