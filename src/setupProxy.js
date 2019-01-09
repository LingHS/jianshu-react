const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api/trending_search', {
    target: 'http://localhost:3000',
    pathRewrite: { '^/trending_search': '/headerList.json' },
  }));
//   app.use(proxy('/*.svg', { target: 'http://localhost:5000/' }));
};
