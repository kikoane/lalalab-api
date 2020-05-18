/* eslint-env node, jest */
const request = require('supertest');
const express = require('express');
const { connectDb, disconnectDb } = require('../loaders/mongoose');
const { userOne, userTwo, newUser, randomUser } = require('./fixtures/usersDb');
const {
  orderOne,
  orderTwo,
  newOrder,
  randomOrder,
} = require('./fixtures/ordersDb');
const User = require('../models/user');
const Order = require('../models/order');

const app = express();

require('../loaders/express')(app);

const idTab = [];

orderOne.email = userOne.email;
orderTwo.email = userTwo.email;
newOrder.email = userOne.email;

beforeAll(connectDb);

beforeEach(async () => {
  await User.deleteMany();
  await User.insertMany([userOne, userTwo]);
  await Order.deleteMany();
  await Order.insertMany([orderOne, orderTwo]);
});

afterAll(disconnectDb);

describe('/api/users', () => {
  describe('POST /api/users', () => {
    test('should create a new user', async () => {
      await request(app).post('/api/users').send(newUser).expect(200);
    });
    test('should not create a new user', async () => {
      await request(app).post('/api/users').send({}).expect(500);
    });
  });
  describe('GET /api/users', () => {
    test('should get all users', async () => {
      const {
        body: { user },
      } = await request(app).get('/api/users').expect(200);
      expect(user).toHaveLength(2);
    });
  });
  describe('GET /api/users/:id', () => {
    test('should get specific user', async () => {
      await request(app).get(`/api/users/${userOne.name}`).expect(200);
      await request(app).get(`/api/users/${userTwo.name}`).expect(200);
    });
    test('should not found user', async () => {
      await request(app).get(`/api/users/${randomUser.name}`).expect(404);
    });
  });
});

describe('/api/orders', () => {
  describe('POST /api/orders', () => {
    test('should create a new order', async () => {
      await request(app).post('/api/orders').send(newOrder).expect(200);
    });
    test('should not create a new order', async () => {
      await request(app).post('/api/orders').send({}).expect(500);
    });
  });

  describe('GET /api/orders', () => {
    test('should get all orders', async () => {
      const {
        body: { order },
      } = await request(app).get('/api/orders').expect(200);
      expect(order).toHaveLength(2);
    });
  });
  describe('GET /api/orders/:id', () => {
    test('should get specific order', async () => {
      const {
        body: { order },
      } = await request(app).get('/api/orders').expect(200);
      order.map(async ({ _id: id }) => idTab.push(id));
      await request(app).get(`/api/orders/${idTab[0]}`).expect(200);
      await request(app).get(`/api/orders/${idTab[1]}`).expect(200);
    });
    test('should not found order', async () => {
      await request(app).get(`/api/orders/${randomOrder.id}`).expect(404);
    });
  });
});
