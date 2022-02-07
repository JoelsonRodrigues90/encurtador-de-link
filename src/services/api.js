import axios from 'axios';

export const key = "9b6dadad545f5dee50feed0661ae2ad272e58f12"

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
      'Authorization': `Bearer ${key}`  
    }
})

export default api;

