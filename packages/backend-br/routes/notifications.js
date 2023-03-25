const express = require("express");

const router = express.Router();

// Authorization middleware
const authenticationMiddleware = require("../middleware/authentication");

const { subscribeUser, notifyUser } = require("../controllers/notifications");

router.post("/subscribe/:userId", authenticationMiddleware, subscribeUser);
router.get("/notify/:userId/:remId", authenticationMiddleware, notifyUser);

module.exports = router;
