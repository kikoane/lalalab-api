const { Schema, model } = require('mongoose');

const { ObjectId } = Schema;

const orderSchema = Schema({
  _id: { type: ObjectId },
  name: String,
  price: Number,
});

module.exports = model('Order', orderSchema);
