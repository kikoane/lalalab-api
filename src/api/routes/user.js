const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const User = require('../../models/user');

const route = Router();

module.exports = (app) => {
  app.use('/users', route);

  route.get('/all', async (req, res) => {
    const user = await User.find();
    if (!user) {
      res.json({ status: 'failed' });
    }
    res.json({ status: 'success', data: user });
  });

  route.get('/:name', async (req, res) => {
    // console.log(req.params.name);
    const user = await User.findOne({ name: req.params.name });
    if (!user) {
      res.json({ status: 'failed' });
    }
    res.json({ status: 'success', data: user });
  });

  route.post(
    '/',
    celebrate({
      body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
      }),
    }),
    (req, res) => {
      const data = {
        name: req.body.name,
        email: req.body.email,
      };
      console.log(data);
      const user = new User(data);
      user.save((err) => {
        if (err) {
          res.status(404).json(err);
        } else {
          res.status(200).json({ message: 'New user created', data });
        }
      });
    },
  );
};
