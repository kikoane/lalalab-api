const { Router } = require('express');
const user = require('./routes/user');
const order = require('./routes/order');

module.exports = () => {
  const app = Router();

  user(app);
  order(app);
  return app;
};
