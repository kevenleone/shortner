import axios from 'axios';

export const baseURL = 'http://localhost:3333';
const api = axios.create({ baseURL });

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('@token');
  request.headers.Authorization = `Bearer ${token}`;

  return request;
});

api.interceptors.response.use((response) => {
  if (response.status === 401) {
    window.location.href = '/sign';
  }

  return response;
});

export default api;
