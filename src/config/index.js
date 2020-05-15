require('dotenv').config();

const { MONGODB_URI: uri, SERVER_PORT: port } = process.env;

module.exports = { uri, port };
