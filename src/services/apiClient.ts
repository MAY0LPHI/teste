import axios from 'axios';

const API_BASE_URL = 'https://api.bible.com'; // Substitua pela URL da API da Bíblia

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para buscar versículos
export const fetchVerses = async (query) => {
  try {
    const response = await apiClient.get(`/verses?search=${query}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar versículos:', error);
    throw error;
  }
};

// Outras funções para interagir com a API podem ser adicionadas aqui

export default apiClient;