const path = require('path');

const workspace = path.join(__dirname, '..');

function resolve(dir) {
  return path.join(workspace, dir);
}

module.exports = (balm) => {
  return balm.config.env.isProd
    ? {
        useDefaults: false
      }
    : {
        server: {
          proxyConfig: {
            context: ['/api'],
            options: {
              target: 'http://example.dev',
              changeOrigin: true
            }
          }
        },
        roots: {
          source: 'test/client'
        },
        scripts: {
          injectHtml: true,
          alias: {
            '@': workspace,
            '@client': resolve('test/client'),
            '@server': resolve('test/server')
          }
        }
      };
};
