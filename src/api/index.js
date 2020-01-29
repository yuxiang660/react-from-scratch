import axios from 'axios';
import actions from '../actions';
const makeRequest = (urlExtension, data = {}) => axios.post(config.baseUrl + urlExtension, data, { withCredentials: true });
export default {
  // getStuff: () => makeRequest('getStuff.php')
  getStuff: () => console.log('getStuff.php')
}
