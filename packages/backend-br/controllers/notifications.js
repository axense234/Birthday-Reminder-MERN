const webpush = require("web-push");
const User = require("../models/User");
const Reminder = require("../models/Reminder");

const publicVapidKey = process.env.WEB_PUSH_PUBLIC_KEY;
const privateVapidKey = process.env.WEB_PUSH_PRIVATE_KEY;

const subscribeUser = async (req, res) => {
  // Setting vapid details
  webpush.setVapidDetails(
    "mailto:contact@pomana.com",
    publicVapidKey,
    privateVapidKey
  );

  // Getting data
  const subscription = req.body;
  const { userId } = req.params;

  const foundUser = await User.findByIdAndUpdate(
    userId,
    { subscription },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.status(200).json({ msg: "Yes" });
};

const notifyUser = async (req, res) => {
  webpush.setVapidDetails(
    "mailto:contact@pomana.com",
    publicVapidKey,
    privateVapidKey
  );

  let responseMessage = "Yes";

  const { userId, remId } = req.params;
  const foundUser = await User.findOne({ _id: userId });
  const foundReminder = await Reminder.findOne({ _id: remId });

  webpush
    .sendNotification(
      foundUser.subscription,
      JSON.stringify({
        title: foundReminder.name,
        body: `It's ${foundReminder.name}'s birthday,let's celebrate!`,
        image: foundReminder.imageSecureUrl,
      })
    )
    .catch((err) => {
      responseMessage = "No";
    });

  return res.status(200).json({ msg: responseMessage });
};

module.exports = { subscribeUser, notifyUser };
