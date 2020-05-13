const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('../api');

module.exports = (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));

  app.use('/api', routes());
};
