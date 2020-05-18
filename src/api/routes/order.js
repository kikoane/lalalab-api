const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const controllers = require('../controllers/order');

const route = new Router();

module.exports = (app) => {
  app.use('/orders', route);

  route.get('/all', controllers.getOrders);

  route.get('/:id', controllers.getOrder);

  route.delete('/all', controllers.deleteOrders);

  route.delete('/:id', controllers.deleteOrder);

  route.post(
    '/',
    celebrate({
      body: Joi.object({
        email: Joi.string().required(),
        figureCount: Joi.string().required(),
        promoCode: Joi.string(),
      }),
    }),
    controllers.postOrder,
  );
};
