const productRouter = require('./product.routes');

function routes(app) {
  const apiVersion = '/api/v4';

  app.use(apiVersion + '/products', productRouter);

  app.use('*', (req, res) => {
    return res.status(404).json({
      status: 404,
      error: true,
      message: '404 Not Found',
      data: [],
    });
  });
}

module.exports = routes;
