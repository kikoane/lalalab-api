const express = require('express');
const { SERVER_PORT } = require('./config');

async function startServer() {
  const app = express();
  // eslint-disable-next-line global-require
  await require('./loaders')(app);
  app.listen(SERVER_PORT, () =>
    console.log(`
    ################################################
    🛡️  Server listening on port: ${SERVER_PORT} 🛡️ 
    ################################################
    `),
  );
}

startServer();
