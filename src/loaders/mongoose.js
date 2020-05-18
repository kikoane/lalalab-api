const mongoose = require('mongoose');
const { uri } = require('../config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

exports.connectDb = async () => {
  let connection;
  try {
    connection = await mongoose.connect(uri, options);
  } catch (err) {
    console.log('error database connection');
  }
  return connection;
};

exports.disconnectDb = async () => {
  let disconnection;
  try {
    disconnection = await mongoose.disconnect();
  } catch (err) {
    console.log('error database disconnection');
  }
  return disconnection;
};
