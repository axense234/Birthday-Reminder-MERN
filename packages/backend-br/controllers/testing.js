const Reminder = require("../models/Reminder");

const deleteAllReminders = async (req, res) => {
  const { userId } = req.params;
  const deleteRes = await Reminder.deleteMany({ createdBy: userId });
  console.log(deleteRes);

  res.status(200).json({ msg: "Successfully deleted all Reminders." });
};

module.exports = { deleteAllReminders };
