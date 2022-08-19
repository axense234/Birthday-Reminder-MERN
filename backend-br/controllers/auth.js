const User = require("../models/User");

const signupUser = async (req, res) => {
  const createdUser = await User.create(req.body.accountDetails);
  const token = createdUser.createJWT();
  res.status(201).json({
    msg: `Created user with id ${createdUser._id}`,
    createdUser,
    token,
  });
};

const loginUser = async (req, res) => {
  const { email, password, username } = req.body;
  if (!username) {
    return res.status(400).json("Please provide username.");
  }

  if (!email) {
    return res.status(401).json("Please provide email.");
  }

  if (!password) {
    return res.status(401).json("Please provide password.");
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json(`No user found with email ${email}.`);
  }

  if (user.username !== username.trim()) {
    return res.status(400).json("Invalid username.");
  }

  const doesPasswordMatch = await user.comparePassword(password);
  if (!doesPasswordMatch) {
    return res.status(401).json("Invalid password,please try again.");
  }

  const token = user.createJWT();
  res.status(200).json({ token });
};

module.exports = { signupUser, loginUser };
