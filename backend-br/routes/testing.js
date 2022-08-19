const express = require("express");
const router = express.Router();

const { deleteAllReminders } = require("../controllers/testing");

router.delete("/reminders", deleteAllReminders);

module.exports = router;
