const expressLoader = require('./express');
const { connectDb: mongooseLoader } = require('./mongoose');

module.exports = async (app) => {
  await mongooseLoader();
  console.log('✌️ DB loaded and connected!');
  expressLoader(app);
  console.log('✌️ Express loaded');
};
