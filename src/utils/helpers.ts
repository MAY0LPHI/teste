export const formatVerse = (verse: string): string => {
    return verse.trim().replace(/\s+/g, ' ');
};

export const generateShareLink = (verse: string, reference: string): string => {
    const baseUrl = 'https://wa.me/?text=';
    const message = `Check out this verse: "${verse}" - ${reference}`;
    return `${baseUrl}${encodeURIComponent(message)}`;
};

export const toggleTheme = (currentTheme: string): string => {
    return currentTheme === 'light' ? 'dark' : 'light';
};

export const isValidVerseReference = (reference: string): boolean => {
    const versePattern = /^[1-3]?\s?[A-Za-z]+\s\d+:\d+$/;
    return versePattern.test(reference);
};