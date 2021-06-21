const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  // TODO: Define REACT_APP_PROXY_TARGET in production environment.
  const target = process.env.REACT_APP_PROXY_TARGET || 'http://localhost:3001';

  app.use(createProxyMiddleware('/posts', {
    target,
    secure: false,
  }));
};
