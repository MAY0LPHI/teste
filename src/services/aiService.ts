import axios from 'axios';

const AI_API_URL = 'https://api.example.com/ai'; // Substitua pela URL real da API de IA

export const generateImage = async (text: string): Promise<string> => {
    try {
        const response = await axios.post(`${AI_API_URL}/generate-image`, { text });
        return response.data.imageUrl;
    } catch (error) {
        console.error('Erro ao gerar imagem:', error);
        throw new Error('Não foi possível gerar a imagem.');
    }
};

export const textToSpeech = async (text: string): Promise<void> => {
    try {
        await axios.post(`${AI_API_URL}/text-to-speech`, { text });
    } catch (error) {
        console.error('Erro ao converter texto em fala:', error);
        throw new Error('Não foi possível converter o texto em fala.');
    }
};