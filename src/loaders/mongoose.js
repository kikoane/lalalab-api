const mongoose = require('mongoose');
const { MONGODB_URI } = require('../config');

module.exports = async () => {
  let connection;
  try {
    connection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log('error database connection');
  }
  return connection.connection.db;
};

/*
async function connect() {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected correctly to server');
  } catch (err) {
    console.log(err.stack);
  }
}

const getConnect = () => mongoose.connection;

async function disconnect() {
  await mongoose.disconnect();
  console.log('database disconnected');
}

module.exports = {
  connect,
  getConnect,
  disconnect,
};

*/
