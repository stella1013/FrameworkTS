import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

export default {
  request(url:any, options:any) {
    return axios({ url, ...options });
  },
  mock() {
    return new MockAdapter(axios);
  }
};