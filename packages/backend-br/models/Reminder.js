const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    birthday: {
      type: Date,
      required: [true, "Please provide a birthday."],
    },
    name: {
      type: String,
      maxlength: [20, "Please use a shorter birthday name!"],
      minlength: [3, "Please provide a longer birthday name!"],
      required: [true, "Please provide a name for the reminder."],
    },
    imageSecureUrl: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminders", ReminderSchema);
