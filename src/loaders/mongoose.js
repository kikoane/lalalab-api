const { MongoClient } = require('mongodb');
const { DB_LOGIN, DB_PW } = require('../util/constants');

const url = `mongodb+srv://${DB_LOGIN}:${DB_PW}@cluster0-mvpph.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(url, { useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log('Connected correctly to server');
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
