import axios from 'axios';

export const instance = () => {
  const data = axios.create({
    baseURL: "http://143.110.245.135/api/",
  });

  data.interceptors.request.use(async function (config) {
 
      config.headers['authorization'] = `Token 17a9da391f65e0ef8440f750e54cbc79cbae3a4c`;
    return config;
  });

  return data;
};

export default instance;
