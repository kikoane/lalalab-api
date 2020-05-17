const User = require('../../models/user');
const { asyncHandler, ErrorResponse } = require('../middlewares/functions');

exports.getAllUsers = asyncHandler(async (req, res, next) => {
  const user = await User.find();
  if (!user) {
    return next(new ErrorResponse(404, 'GET on /users/all FAILED'));
  }
  res.json({ status: 'success', data: user });
});

exports.getOneUser = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ name: req.params.name });
  if (!user) {
    return next(new ErrorResponse(404, 'Name not found'));
  }
  res.json({ status: 'success', data: user });
});

exports.createUser = asyncHandler(async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.status(200).json({ message: 'New user created', data: { name, email } });
});
