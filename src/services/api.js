import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Base URL de l'API
});

export const fetchCategories = () => API.get('/api/shop/categories/');
export const fetchProducts = () => API.get('/api/shop/products/');
export const createOrder = (orderData) => API.post('/api/shop/commandes/', orderData);
