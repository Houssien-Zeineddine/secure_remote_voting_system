import axios from 'axios';

const token = localStorage.getItem('access_token');

const axiosInstance = axios.create({
  baseURL: 'http://13.38.84.88:8000/api/v0.1',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default axiosInstance;