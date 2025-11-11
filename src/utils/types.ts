export interface Verse {
    id: string;
    text: string;
    reference: string;
    book: string;
    chapter: number;
    verseNumber: number;
}

export interface Theme {
    name: string;
    backgroundColor: string;
    color: string;
}

export interface SearchResult {
    verses: Verse[];
    totalResults: number;
}

export interface ImageGenerationRequest {
    prompt: string;
    size: 'small' | 'medium' | 'large';
}

export interface TTSRequest {
    text: string;
    language: string;
}