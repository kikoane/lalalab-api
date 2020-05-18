/* eslint-env node, jest */
const request = require('supertest');
const express = require('express');
const { connectDb, disconnectDb } = require('../loaders/mongoose');
const { userOne, userTwo, newUser, randomUser } = require('./fixtures/db');
const User = require('../models/user');

const app = express();
require('../loaders/express')(app);

beforeAll(connectDb);

beforeEach(async () => {
  await User.deleteMany();
  await User.insertMany([userOne, userTwo]);
});

afterAll(disconnectDb);

describe('api/users', () => {
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
