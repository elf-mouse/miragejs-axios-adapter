import '@server';
import axios from 'axios';

axios.defaults.baseURL = '/api';

const requestConfig = {
  baseURL: '/mock/api'
};

async function testGet() {
  const response = await axios.get('/demo?method=get', {
    params: {
      name: 'Hello BalmJS',
      since: 2016
    },
    ...requestConfig
  });
  const { data } = response;
  console.log('[client] get data:', data);
}

async function testPost() {
  const response = await axios.post(
    '/demo?method=post',
    {
      name: 'Hello BalmUI',
      since: 2018
    },
    requestConfig
  );
  const { data } = response;
  console.log('[client] post data:', data);
}

async function test() {
  await testGet();

  console.log('--------');

  await testPost();
}

test();
