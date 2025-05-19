import axios from 'axios';

const token = localStorage.getItem('access_token');

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default axiosInstance;