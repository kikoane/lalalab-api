const { Schema, model } = require('mongoose');

const User = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
      unique: true,
      index: true,
    },

    email: {
      type: String,
      required: [true, 'Please enter an email'],
      lowercase: true,
      unique: true,
      index: true,
    },
  },
  { timestamps: true },
);

module.exports = model('User', User);
