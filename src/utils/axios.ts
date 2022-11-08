import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;


export const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY': process.env.REACT_APP_API_KEY,
    'Content-Type': 'application/json',
},
});