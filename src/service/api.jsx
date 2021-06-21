import axios from 'axios';
import http from 'http';

const agent = new http.Agent({ keepAlive: true });
const api = axios.create({
  baseURL: '/posts',
  headers: {
    'Content-type': 'Application/json',
  },
  agent,
});

export default api;
