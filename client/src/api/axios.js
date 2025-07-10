import axios from 'axios';

const instance = axios.create({
  baseURL: "https://skillswap-w89k.onrender.com",
});

export default instance;
