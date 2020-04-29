const app = require('./app');
const { SERVER_PORT } = require('./util/constants');

(async () => {
  app.listen(SERVER_PORT, () =>
    console.log(`Server is listening on port ${SERVER_PORT}`),
  );
})();
