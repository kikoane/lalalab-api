require('dotenv').config();

const { DB_LOGIN, DB_PW, SERVER_PORT } = process.env;

module.exports = { DB_LOGIN, DB_PW, SERVER_PORT };
