import axios from 'axios';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from './../constants';

const baseURL = 'http://localhost:5000/api';

const httpClient = axios.create({
  baseURL,
});

export const loginUser = (data) => httpClient.post('/auth/login', data);
export const signUpUser = (data) => httpClient.post('/auth/signup', data);
export const refreshAuth = (data) => httpClient.post('/auth/refresh', data);

httpClient.interceptors.request.use((config) => {
  return config;
});

const authUrlPattern = /\/auth\/\w+/i;

httpClient.interceptors.response.use(
  (response) => {
    const {
      config: { url },
    } = response;

    if (authUrlPattern.test(url)) {
      const {
        data: {
          data: { tokenPair },
        },
      } = response;
      sessionStorage.setItem(ACCESS_TOKEN_KEY, tokenPair.accessToken);
      localStorage.setItem(REFRESH_TOKEN_KEY, tokenPair.refreshToken);
    }
    return response;
  },
  async (err) => {
    console.group('AXIOS ERROR');
    console.dir(err);
    console.groupEnd();

    const {
      config: { url },
      response: { status },
    } = err;

    if (status !== 401) {
      throw err;
    }
    if (url === '/auth/refresh') {
      sessionStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(REFRESH_TOKEN_KEY);
      throw err;
    }

    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (refreshToken) {
      await refreshAuth({
        refreshToken,
      });
      // retry
      return httpClient.request(err.config);
    }

    throw err;
  },
);

export default httpClient;
