import axios from "axios";

const BASE_URL = process.env.REACT_APP_API;

export const publicAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-API-KEY': '98bd6b7a-6688-4ee8-a75d-9141521969df',
    'Content-Type': 'application/json',
},
});