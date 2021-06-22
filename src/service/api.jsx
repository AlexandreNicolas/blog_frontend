import axios from 'axios';

const api = axios.create({
  baseURL: 'https://leadeasybackend.herokuapp.com',
  maxRedirects: 0,
});

export default api;
