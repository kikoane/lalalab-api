const { Schema, model } = require('mongoose');

const { ObjectId } = Schema;

const userSchema = Schema({
  _id: { type: ObjectId },
  name: {
    type: String,
    required: [true, 'Please enter a full name'],
    index: true,
  },

  email: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
  },
});

module.exports = model('User', userSchema);
