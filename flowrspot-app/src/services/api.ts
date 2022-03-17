import axios, {AxiosInstance} from 'axios';
import { API_BASE_URL, REQUEST_TIMEOUT } from '../const';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
