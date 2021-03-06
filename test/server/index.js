import useAdapter from '@/lib';
import axios from 'axios';
import { createServer } from 'miragejs';
import { NAMESPACE, MOCK_API_REGEX } from './config';
import createApis from './modules';

function mockServer() {
  useAdapter(axios, MOCK_API_REGEX, true);

  const server = createServer({
    routes() {
      this.namespace = NAMESPACE;

      createApis(this);
    }
  });

  server.passthrough(({ url }) => !MOCK_API_REGEX.test(url));

  return server;
}

if (process.env.NODE_ENV === 'development') {
  mockServer();
}
