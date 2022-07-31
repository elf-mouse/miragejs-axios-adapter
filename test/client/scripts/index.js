import '@server';
import axios from 'axios';

const requestConfig = {
  baseURL: '/mock'
};

async function testGet() {
  const response = await axios.get('/demo', {
    params: {
      name: 'Hello BalmJS'
    },
    ...requestConfig
  });
  const { data } = response;
  console.log('get data:', data);
}

async function testPost() {
  const response = await axios.post(
    '/demo?m=post',
    {
      name: 'Hello BalmUI'
    },
    requestConfig
  );
  const { data } = response;
  console.log('post data:', data);
}

testGet();
// testPost();
