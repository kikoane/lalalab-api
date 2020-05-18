const Order = require('../../models/order');
const User = require('../../models/user');
const { asyncHandler, ErrorResponse } = require('../middlewares');

exports.getOrders = asyncHandler(async (req, res, next) => {
  const order = await Order.find();
  if (!order) {
    return next(new ErrorResponse(404, 'Orders not found'));
  }
  res.status(200).json({ message: 'Orders found', order });
});

exports.getOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return next(new ErrorResponse(404, 'Order id incorrect'));
  }
  const order = await Order.findById(id);
  if (!order) {
    return next(new ErrorResponse(404, 'Order not found'));
  }
  res.status(200).json({ message: 'Order found', order });
});

exports.postOrder = asyncHandler(async (req, res, next) => {
  const { email, figureCount, promoCode } = req.body;

  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    return next(new ErrorResponse(404, 'User email not found'));
  }
  let figurePrice;
  if (figureCount > 50) {
    figurePrice = figureCount * 9;
  } else {
    figurePrice = figureCount * 15;
  }
  if (promoCode === 'MiNi Familly Pack') {
    figurePrice = (figurePrice * 0.8).toFixed(2);
  }
  const clientData = { email, figureCount, promoCode, figurePrice };
  const order = new Order(clientData);
  await order.save();
  res.status(200).json({ message: 'New order created', clientData });
});

exports.deleteOrders = asyncHandler(async (req, res) => {
  const { deletedCount } = await Order.deleteMany();
  res.status(200).json({ message: 'Orders deleted successfuly', deletedCount });
});

exports.deleteOrder = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  if (!id.match(/^[0-9a-fA-F]{24}$/)) {
    return next(new ErrorResponse(404, 'Order id incorrect'));
  }
  const order = await Order.findByIdAndDelete(id);
  if (!order) {
    return next(new ErrorResponse(404, 'Order not found'));
  }
  res.status(200).json({ message: 'Order deleted successfuly', order });
});
