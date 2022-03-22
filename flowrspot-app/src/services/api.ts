import { API_BASE_URL, REQUEST_TIMEOUT } from '../const';
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig
} from 'axios';
import { getToken } from './token';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error: AxiosError) => {
      const { response } = error;
      return response;
    },
  );

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers['x-token'] = token;
    }

    return config;
  });
  return api;
};
