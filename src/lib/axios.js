import { useAuthStore } from '@/store/authStore';
import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

// ✅ Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: auto logout on 401
    if (error.response?.status === 401) {
      console.warn('Unauthorized. Logging out...');
      const logout = useAuthStore.getState().logout;
      logout();
      window.location.href = '/login';
      // logoutUser(); // optional: redirect, clear state, etc.
    }
    return Promise.reject(error);
  }
);

export default api;
