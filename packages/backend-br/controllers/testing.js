const Reminder = require("../models/Reminder");

const deleteAllReminders = async (req, res) => {
  const { userId } = req.params;
  await Reminder.deleteMany({ createdBy: userId });

  return res.status(200).json({ msg: "Successfully deleted all Reminders." });
};

module.exports = { deleteAllReminders };
