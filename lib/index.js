import getXhrAdapter from './xhr';
import getFetchAdapter from './fetch';

const MOCK_API_REGEX = /^\/api\/mock/;

export default function useAdapter(axios, mockApiRegex = MOCK_API_REGEX) {
  if (axios) {
    axios.defaults.adapter = (config) =>
      new Promise((resolve, reject) =>
        mockApiRegex.test(config.baseURL)
          ? getFetchAdapter(config, resolve, reject)
          : getXhrAdapter(config, resolve, reject)
      );
  } else {
    throw new Error('`axios` module not found');
  }
}
