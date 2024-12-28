import axios from 'axios';

const API = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // Base URL de l'API
});

export const fetchCategories = () => API.get('/shop/api/categories/');
export const fetchProducts = () => API.get('/shop/api/products/');
export const createOrder = (orderData) => API.post('/shop/api/commandes/', orderData);
