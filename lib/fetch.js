import buildFullPath from 'axios/lib/core/buildFullPath';

export default function getFetchAdapter(config, resolve, reject, debug) {
  const fullPath = buildFullPath(config.baseURL, config.url);
  const method = config.method.toUpperCase();

  let url = fullPath;
  if (method === 'GET' && Object.keys(config.params).length) {
    url += '?';
    for (const [key, value] of Object.entries(config.params)) {
      url += `${key}=${value}`;
    }
  }

  const options =
    method === 'GET'
      ? {}
      : {
          method,
          body: config.data
        };

  debug && console.log('fetch:', url, options);

  return fetch(url, options)
    .then(async (response) => {
      const { status, statusText } = response;
      const responseData = await response.json();

      resolve({
        data: responseData,
        status,
        statusText,
        config: config,
        request: fetch
      });
    })
    .catch((err) => reject(err));
}
