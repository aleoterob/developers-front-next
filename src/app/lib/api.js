// src/app/lib/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://developers-api-controller-production.up.railway.app/",
});

export default api;
