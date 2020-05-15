const mongoose = require('mongoose');
const { uri } = require('../config');

module.exports = async () => {
  let connection;
  try {
    connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log('error database connection');
  }
  return connection.connection.db;
};
