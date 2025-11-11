import React, { useState } from 'react';

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
        setQuery('');
    };

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar versículos..."
                className="search-input"
            />
            <button type="submit" className="search-button">Buscar</button>
        </form>
    );
};

export default SearchBar;