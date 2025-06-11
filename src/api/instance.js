import axios from "axios";
import { localStorageUtils } from "../utilities/localStorage";

const BASE_URL = "http://localhost:5173";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const { getItemFromLocalStorage } = localStorageUtils();
    const tokens = getItemFromLocalStorage("authkey");
    if (tokens?.access) {
      config.headers.Authorization = `bearer ${tokens.access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
