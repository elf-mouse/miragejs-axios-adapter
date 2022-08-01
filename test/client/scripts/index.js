import '@server';
import axios from 'axios';

axios.defaults.baseURL = '/api';

function requestConfig(mock = false) {
  return mock
    ? {
        baseURL: '/mock/api'
      }
    : {
        baseURL: '/api'
      };
}

async function testGet(mock = false) {
  const response = await axios.get('/demo?method=get', {
    params: {
      name: 'Hello BalmJS',
      since: 2016
    },
    ...requestConfig(mock)
  });
  const { data } = response;
  console.log('[client] get data:', data);
}

async function testPost(mock = false) {
  const response = await axios.post(
    '/demo?method=post',
    {
      name: 'Hello BalmUI',
      since: 2018
    },
    requestConfig(mock)
  );
  const { data } = response;
  console.log('[client] post data:', data);
}

async function test() {
  document.body.innerHTML = 'Hello Mock Server';

  console.log('---- test GET ----');

  try {
    await testGet();
  } catch (e) {
    console.log(e.toString());
  }

  console.log('---- mock GET ----');

  await testGet(true);

  console.log('---- test POST ----');

  try {
    await testPost();
  } catch (e) {
    console.log(e.toString());
  }

  console.log('---- mock POST ----');

  await testPost(true);
}

test();
