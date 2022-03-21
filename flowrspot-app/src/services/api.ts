// import axios, {AxiosInstance} from 'axios';
import { API_BASE_URL, NotificationMessage, REQUEST_TIMEOUT } from '../const';

/* export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
 */

import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  AxiosRequestConfig
} from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';

enum HttpCode {
  Unauthorized = 401
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      const { response } = error;

      if (response?.status === HttpCode.Unauthorized) {
        toast.info(NotificationMessage.CheckAuth);
      }
      return error;
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

/*
export const createApiWithoutCallback = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

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
 */
