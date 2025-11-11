import axios from 'axios';

const API_URL = 'https://api.biblia.com/v1/bible/content/';

export const fetchVerse = async (version: string, reference: string) => {
    try {
        const response = await axios.get(`${API_URL}${version}/${reference}?key=YOUR_API_KEY`);
        return response.data;
    } catch (error) {
        console.error('Error fetching verse:', error);
        throw error;
    }
};

export const searchVerses = async (version: string, query: string) => {
    try {
        const response = await axios.get(`${API_URL}${version}/search?query=${query}&key=YOUR_API_KEY`);
        return response.data;
    } catch (error) {
        console.error('Error searching verses:', error);
        throw error;
    }
};