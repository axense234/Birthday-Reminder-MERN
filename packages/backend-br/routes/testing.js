const express = require("express");

const router = express.Router();

// Controllers
const { deleteAllReminders } = require("../controllers/testing");

router.delete("/user/reminders/:userId", deleteAllReminders);

module.exports = router;
