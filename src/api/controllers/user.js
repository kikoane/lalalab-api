const User = require('../../models/user');
const { asyncHandler, ErrorResponse } = require('../middlewares');

exports.getUsers = asyncHandler(async (req, res, next) => {
  const user = await User.find();
  if (!user) {
    return next(new ErrorResponse(404, 'All users not found'));
  }
  res.status(200).json({ status: 'Get all users success', user });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ name: req.params.name });
  if (!user) {
    return next(new ErrorResponse(404, 'User not found'));
  }
  res.json({ status: 'success', user });
});

exports.postUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.status(200).json({ message: 'New user created', name, email });
});

exports.deleteUsers = asyncHandler(async (req, res) => {
  const { deletedCount } = await User.deleteMany();
  res.status(200).json({ message: 'Delete all users success', deletedCount });
});
