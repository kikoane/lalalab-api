const mongoose = require('mongoose');
const { uri } = require('../config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

module.exports = async () => {
  let connection;
  try {
    connection = await mongoose.connect(uri, options);
  } catch (err) {
    console.log('error database connection');
  }
  return connection;
};
