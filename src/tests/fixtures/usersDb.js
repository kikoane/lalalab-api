const faker = require('faker');

const userOne = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
};

const userTwo = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
};

const newUser = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
};

const randomUser = {
  name: faker.internet.userName(),
  email: faker.internet.email(),
};

module.exports = {
  userOne,
  userTwo,
  newUser,
  randomUser,
};
