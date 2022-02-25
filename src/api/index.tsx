import axios from 'axios';

const proxy = 'https://developjik-proxy-server.herokuapp.com/';
const BASE_URL = 'https://storage-fe.fastraffic.io/homeworks/links';
// const proxy = 'https://cors-anywhere.herokuapp.com/';
// const BASE_URL = 'https://week4-proxy.herokuapp.com/api';

const getAPI = async () => {
  const response = await axios.get(`${proxy}${BASE_URL}`);
  return response.data;
};

export default getAPI;
