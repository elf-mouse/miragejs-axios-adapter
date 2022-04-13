export default function createApis(server) {
  server.get('/users', () => [
    { id: '1', name: 'Luke' },
    { id: '2', name: 'Leia' },
    { id: '3', name: 'Anakin' }
  ]);
}
