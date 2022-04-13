import '@server';
import axios from 'axios';

axios.defaults.baseURL = '/api';

async function test() {
  const response = await axios.get('/mock/users');
  const { data } = response;
  console.log('users:', data);
}

test();
