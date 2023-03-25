const express = require("express");

const router = express.Router();

// Authorization middleware
const authenticationMiddleware = require("../middleware/authentication");

const {
  getAllReminders,
  createReminder,
  getAllUserReminders,
  deleteSingleReminder,
  getSingleReminder,
  patchSingleReminder,
} = require("../controllers/reminders");

router.get("/reminders", authenticationMiddleware, getAllReminders);
router.post("/create-reminder", authenticationMiddleware, createReminder);
router.get(
  "/edit-reminder/:remId",
  authenticationMiddleware,
  getSingleReminder
);
router.patch(
  "/edit-reminder/:remId",
  authenticationMiddleware,
  patchSingleReminder
);

router.get(
  "/user/reminders/:id",
  authenticationMiddleware,
  getAllUserReminders
);

router.delete(
  "/user/reminders/:userId/:remId",
  authenticationMiddleware,
  deleteSingleReminder
);

module.exports = router;
