const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const { getAllUsers, getOneUser, createUser } = require('../controllers/user');

const route = new Router();

module.exports = (app) => {
  app.use('/users', route);

  route.get('/all', getAllUsers);

  route.get('/:name', getOneUser);

  route.post(
    '/',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    }),
    createUser,
  );
};
