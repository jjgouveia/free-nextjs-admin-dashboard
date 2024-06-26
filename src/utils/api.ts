import axios from 'axios';
import { getStorageItem } from './localStorage';
import { ACCESS_TOKEN } from '@/constants/constants';

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(`ATIVOS_${ACCESS_TOKEN}`);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;