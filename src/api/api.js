import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333', // Certifique-se de que está correto
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
