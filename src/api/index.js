import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.example.com",
});

export default {
  get(url, config = {}) {
    return instance.get(url, config);
  },
  post(url, data, config = {}) {
    return instance.post(url, data, config);
  },
  put(url, data, config = {}) {
    return instance.put(url, data, config);
  },
  delete(url, config = {}) {
    return instance.delete(url, config);
  },
};

/* 
请求demo：
import api from '@/api'

export default {
  methods: {
    async fetchData() {
      const { data } = await api.get('/data')
      console.log(data)
    }
  }
}
*/
