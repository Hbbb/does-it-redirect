import request from 'superagent';
import {API_URL} from 'constants';

const ApiService = {
  determineRedirect(url, callback) {
    request
      .get('http://localhost:3000')
      .query({url: url})
      .end(callback)
  }
};

export default ApiService;

