const { Schema, model } = require('mongoose');

const Order = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter a correct email'],
      index: true,
    },

    figureCount: {
      type: Number,
      required: [true, 'Please enter an amount of figure'],
      index: true,
    },

    figurePrice: {
      type: Number,
      required: [true, 'Please enter the total price'],
      index: true,
    },

    promoCode: String,
  },
  { timestamps: true },
);

module.exports = model('Order', Order);
