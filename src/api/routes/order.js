const { Router } = require('express');

const route = Router();

module.exports = (app) => {
  app.use('/orders', route);

  route.get('/', (req, res) => {
    res.status(200).json({ message: 'Handling GET requests to /orders' });
  });

  route.post('/', (req, res) => {
    const { name, order } = req.body;

    console.log({ name, order });
    res.status(200).json({ message: 'Handling POST requests to /orders' });
  });
};
