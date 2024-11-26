import axios from "axios";
import { getDataFromLocalStorage } from "../Utilies/LocalStorge";

const url = "https://chatappgagan.onrender.com";

const api = axios.create({
  baseURL: url,
});


// intercepTer Request
api.interceptors.request.use(
  async (config) => {
    const token = getDataFromLocalStorage("authToken");
      config.headers.Authorization = `Bearer ${token}`;
      
      return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// response
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
   throw error
  }
);

queueMicrotask;
export default api;
