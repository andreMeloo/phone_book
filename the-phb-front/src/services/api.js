import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:3031/contacts",
});
  
export default api;