import getXhrAdapter from './xhr';
import getFetchAdapter from './fetch';
import { MOCK_API_REGEX } from './config';

export default function useAdapter(
  axios,
  mockApiRegex = MOCK_API_REGEX,
  debug = false
) {
  if (axios) {
    axios.defaults.adapter = (config) =>
      new Promise((resolve, reject) =>
        mockApiRegex.test(config.baseURL)
          ? getFetchAdapter(config, resolve, reject, debug)
          : getXhrAdapter(config, resolve, reject, debug)
      );
  } else {
    throw new Error('`axios` module not found');
  }
}
