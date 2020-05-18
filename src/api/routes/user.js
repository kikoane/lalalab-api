const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const controllers = require('../controllers/user');

const route = new Router();

module.exports = (app) => {
  app.use('/users', route);

  route.get('/all', controllers.getUsers);

  route.get('/:name', controllers.getUser);

  route.delete('/all', controllers.deleteUsers);

  route.delete('/:name', controllers.deleteUser);

  route.post(
    '/',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    }),
    controllers.postUser,
  );
};
