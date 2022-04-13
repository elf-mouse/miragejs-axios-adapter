import buildFullPath from 'axios/lib/core/buildFullPath';

export default function getFetchAdapter(config, resolve, reject) {
  const fullPath = buildFullPath(config.baseURL, config.url);

  // console.log('fetch:', fullPath);

  return fetch(fullPath)
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
