export default function createApis(server) {
  server.get('/demo/:name', (_, request) => {
    const params = request.params;

    console.info('get params', params.name);

    return [
      { id: '1', name: 'Luke' },
      { id: '2', name: 'Leia' },
      { id: '3', name: 'Anakin' }
    ];
  });

  server.post('/demo', (_, request) => {
    const data = JSON.parse(request.requestBody);

    console.info('post data', data.name);

    return [
      { id: '1', name: 'Luke' },
      { id: '2', name: 'Leia' },
      { id: '3', name: 'Anakin' }
    ];
  });
}
