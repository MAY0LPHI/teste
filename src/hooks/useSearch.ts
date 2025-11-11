import { useState, useEffect } from 'react';
import { fetchVerses } from '../services/bibleApi';

const useSearch = () => {
    const [query, setQuery] = useState('');
    const [verses, setVerses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchQuery) => {
        setLoading(true);
        setError(null);
        try {
            const results = await fetchVerses(searchQuery);
            setVerses(results);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (query) {
            handleSearch(query);
        } else {
            setVerses([]);
        }
    }, [query]);

    return {
        query,
        setQuery,
        verses,
        loading,
        error,
    };
};

export default useSearch;