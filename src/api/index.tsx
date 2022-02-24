import axios from "axios";

const BASE_URL = "https://storage-fe.fastraffic.io/homeworks/links";

const getAPI = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export default getAPI;
