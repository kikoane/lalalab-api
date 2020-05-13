require('dotenv').config();

const { MONGODB_URI, SERVER_PORT } = process.env;

module.exports = { MONGODB_URI, SERVER_PORT };
