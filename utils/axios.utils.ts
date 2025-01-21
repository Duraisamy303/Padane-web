import axios from 'axios';

export const instance = () => {
  const data = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
  });

  data.interceptors.request.use(async function (config) {
 
      // config.headers['authorization'] = `Token ${accessToken}`;
      const accessToken = localStorage.getItem('token');
      if (accessToken) {
        config.headers['authorization'] = `Token ${accessToken}`;
      }
    return config;
  });

  return data;
};

export default instance;
