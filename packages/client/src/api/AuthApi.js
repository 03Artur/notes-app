import { REFRESH_TOKEN_KEY } from '../constants';

class AuthApi {
  constructor({ client }) {
    this.token = null;
    this.client = client;
    this.client.interceptors.request.use(this.interceptRequest);
    this.url = '/auth';
    this.client.interceptors.response.use(this.interceptResponse, this.interceptResponseError);
  }

  login = (data) => {
    return this.client.post(`${this.url}/login`, data);
  };

  logout = () => {
    this.token = null;
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  };

  signUp = (data) => {
    return this.client.post(`${this.url}/signup`, data);
  };

  refresh = (data) => {
    return this.client.post(`${this.url}/refresh`, data);
  };

  interceptRequest = (config) => {
    if (this.token) {
      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${this.token}`,
        },
      };
    }
    return config;
  };

  interceptResponse = (response) => {
    const {
      config: { url },
      data,
    } = response;
    if (url.indexOf(this.url) === 0) {
      const {
        data: {
          tokenPair: { accessToken, refreshToken },
        },
      } = data;
      this.token = accessToken;
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
    return response;
  };

  interceptResponseError = async (err) => {
    console.log(err);

    if (
      err.response.status === 401 &&
      err.config.url === `${this.url}/refresh` &&
      localStorage.getItem(REFRESH_TOKEN_KEY)
    ) {
      this.logout();
    }

    if (err.response.status === 401 && localStorage.getItem(REFRESH_TOKEN_KEY)) {
      await this.refresh({
        refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY),
      });

      const newRequest = {
        ...err.config,
        retry: true,
      };

      return this.client(newRequest);
    }
    throw err;
  };
}

export default AuthApi;
