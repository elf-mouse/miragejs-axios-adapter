# Miragejs axios adapter

## Installation

```sh
yarn add miragejs-axios-adapter
# OR
npm i miragejs-axios-adapter
```

## Usage

```js
import useAdapter from 'miragejs-axios-adapter';
import axios from 'axios';
import { createServer } from 'miragejs';

const NAMESPACE = '/api/mock';
const MOCK_API_REGEX = /^\/api\/mock/;
const PROXY_API_REGEX = /^\/(api)\//;

function mockServer() {
  useAdapter(axios, MOCK_API_REGEX);

  const server = createServer({
    routes() {
      this.namespace = NAMESPACE;

      // More apis
    }
  });

  server.passthrough(
    ({ url }) => PROXY_API_REGEX.test(url) && !MOCK_API_REGEX.test(url)
  );

  return server;
}

if (process.env.NODE_ENV === 'development') {
  mockServer();
}
```
