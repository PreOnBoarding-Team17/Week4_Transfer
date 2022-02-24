import axios from 'axios'

const proxy = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'https://storage-fe.fastraffic.io/homeworks/links'

const getAPI = async () => {
  const response = await axios.get(`${proxy}${BASE_URL}`)
  return response.data
}

export default getAPI
