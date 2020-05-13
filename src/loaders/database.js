const { MongoClient } = require('mongodb');
const { MONGODB_URI } = require('../config');

const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });

async function run() {
  try {
    console.log(MONGODB_URI);
    await client.connect();
    console.log('Connected correctly to server');
  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
