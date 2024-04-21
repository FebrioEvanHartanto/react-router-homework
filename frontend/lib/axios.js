import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8000/"
})

instance.interceptors.request.use((config) => {

  if(localStorage.getItem("accessToken")){
    const accessToken = localStorage.getItem("accessToken")
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config;
  
}, (error) => {
    throw error;
});

export default instance;