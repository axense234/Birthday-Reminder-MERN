const bcrypt = require("bcryptjs");
const User = require("../models/User");

const getAllUsers = async (req, res) => {
  return res.status(200).json({ success: true, msg: "Hello" });
};

const getUser = async (req, res) => {
  const { userId } = req.user;
  const foundUser = await User.findOne({ _id: userId });
  res.status(200).json({
    username: foundUser.username,
    email: foundUser.email,
    createdAt: foundUser.createdAt,
    id: foundUser._id,
    imageSecureUrl: foundUser.imageSecureUrl,
  });
};

const updateUser = async (req, res) => {
  const settings = req.body;

  if (settings.password) {
    const salt = await bcrypt.genSalt(10);
    settings.password = await bcrypt.hash(settings.password, salt);
  }

  if (!settings) {
    return res.status(404).json("No settings found to be updated.");
  }
  const newUser = await User.findOneAndUpdate({ _id: settings.id }, settings, {
    new: true,
    runValidators: true,
  });
  if (!newUser) {
    return res.status(404).json(`No user found with id ${settings.id}.`);
  }

  newUser.createJWT();
  res.status(200).json(newUser);
};

module.exports = { getAllUsers, getUser, updateUser };
