const Reminder = require("../models/Reminder");
const User = require("../models/User");

const getAllReminders = async (req, res) => {
  const reminders = await Reminder.find({});

  if (reminders.length < 1) {
    return res.status(404).json("No users found.");
  }

  return res.status(200).json({ reminders });
};

const createReminder = async (req, res) => {
  const {
    reminder,
    profile: { id: createdBy },
  } = req.body;

  const {
    reminderImageUrl: imageSecureUrl,
    reminderName: name,
    reminderBirthday: birthday,
  } = reminder;

  const associatedUser = await User.findOne({ _id: createdBy });

  if (!associatedUser) {
    return res.status(404).json(`No user found with associated id.`);
  }

  await User.findOneAndUpdate(
    { _id: createdBy },
    { reminderCount: associatedUser.reminderCount + 1 },
    {
      runValidators: true,
    }
  );

  const createdReminder = await Reminder.create({
    createdBy,
    birthday,
    name,
    imageSecureUrl,
  });

  return res.status(201).json({ createdReminder });
};

const getAllUserReminders = async (req, res) => {
  const { id: userId } = req.params;
  const { sortType, inputValue } = req.query;

  let userReminders = [];

  if (!userId) {
    return res.status(500).json("Server error,no id");
  }

  if (sortType === "name") {
    userReminders = await Reminder.find({ createdBy: userId }).sort({
      name: 1,
    });

    if (inputValue) {
      userReminders = userReminders.filter((reminder) => {
        return reminder.name.includes(inputValue);
      });
    }
    if (!userReminders) {
      return res.status(404).json("User has no reminders.");
    }
    // By birthday date
  } else if (sortType === "birthdayDate") {
    userReminders = await Reminder.find({ createdBy: userId }).sort({
      birthday: "desc",
    });
    if (inputValue) {
      userReminders = userReminders.filter((reminder) => {
        return reminder.birthday.toString().includes(inputValue);
      });
    }
    if (!userReminders) {
      return res.status(404).json("User has no reminders.");
    }
    // By createdAt
  } else if (sortType === "newest") {
    userReminders = await Reminder.find({ createdBy: userId }).sort({
      createdAt: -1,
    });
    if (inputValue) {
      userReminders = userReminders.filter((reminder) => {
        return reminder.createdAt.toString().includes(inputValue);
      });
    }
    if (!userReminders) {
      return res.status(404).json("User has no reminders.");
    }
    // By time remaining(birthday)
  } else if (sortType === "timeRemaining") {
    userReminders = await Reminder.find({ createdBy: userId }).sort({
      birthday: "asc",
    });
    if (inputValue) {
      userReminders = userReminders.filter((reminder) => {
        return reminder.birthday.toString().includes(inputValue);
      });
    }
    if (!userReminders) {
      return res.status(404).json("User has no reminders.");
    }
  } else {
    userReminders = await Reminder.find({ createdBy: userId });
    if (!userReminders) {
      return res.status(404).json("User has no reminders.");
    }
  }

  return res.status(200).json({ reminders: userReminders });
};

const getSingleReminder = async (req, res) => {
  const { remId } = req.params;
  const reminder = await Reminder.findOne({ _id: remId });

  if (!reminder) {
    return res.status(404).json(`No reminder found with id: ${remId}`);
  }

  return res.status(200).json({ reminder });
};

const deleteSingleReminder = async (req, res) => {
  const { userId, remId } = req.params;
  if (!remId || !userId) {
    return res.status(404).json("Please specify user id and rem id.");
  }
  // DELETE REMINDER FROM DB
  const deletedReminder = await Reminder.findByIdAndDelete({ _id: remId });
  if (!deletedReminder) {
    return res.status(404).json("No reminder to delete");
  }
  // DECREASE REMINDER COUNT OF USER BY 1
  const user = await User.findOne({ _id: userId });
  if (!user) {
    return res.status(404).json("No user with that respective id.");
  }
  await User.findByIdAndUpdate(
    { _id: userId },
    {
      reminderCount: user.reminderCount - 1,
    }
  );
  return res.status(200).json({ msg: "Successfully deleted reminder." });
};

const patchSingleReminder = async (req, res) => {
  const { remId } = req.params;
  const { reminder } = req.body;
  const {
    reminderBirthday: birthday,
    reminderName: name,
    reminderImageUrl: imageSecureUrl,
  } = reminder;

  const editedReminder = await Reminder.findOneAndUpdate(
    { _id: remId },
    { birthday, name, imageSecureUrl },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!editedReminder) {
    return res.status(404).json("No reminder found!");
  }

  return res.status(200).json(editedReminder);
};

module.exports = {
  getAllReminders,
  createReminder,
  getAllUserReminders,
  deleteSingleReminder,
  getSingleReminder,
  patchSingleReminder,
};
