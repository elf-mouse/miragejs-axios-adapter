export default function createApis(server) {
  server.get('/demo', (_, request) => {
    const params = request.queryParams;

    console.info('[server] get params', params);

    return [
      { id: '1', name: 'Luke' },
      { id: '2', name: 'Leia' },
      { id: '3', name: 'Anakin' }
    ];
  });

  server.post('/demo', (_, request) => {
    const params = request.queryParams;
    const data = JSON.parse(request.requestBody);

    console.info('[server] post params', params);
    console.info('[server] post data', data);

    return [
      { id: '1', name: 'Luke' },
      { id: '2', name: 'Leia' },
      { id: '3', name: 'Anakin' }
    ];
  });
}
