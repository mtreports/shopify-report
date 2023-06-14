const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://15.206.106.44:5055/',
      changeOrigin: true,
    })
  );
};