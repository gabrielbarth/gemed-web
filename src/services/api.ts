import axios from 'axios';

const api = axios.create({
  // baseURL:  process.env.REACT_APP_API_URL,
  baseURL:  'https://gemed-backend-server.herokuapp.com/',
});

export default api;
