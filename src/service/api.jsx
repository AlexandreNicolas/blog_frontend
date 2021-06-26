import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_PROXY_TARGET,
  maxRedirects: 0,
});

export default api;
