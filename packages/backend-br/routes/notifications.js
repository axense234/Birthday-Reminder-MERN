const express = require("express");

const router = express.Router();

// Controllers and Middleware
const { subscribeUser, notifyUser } = require("../controllers/notifications");
const authenticationMiddleware = require("../middleware/authentication");

router.post("/subscribe/:userId", authenticationMiddleware, subscribeUser);
router.get("/notify/:userId/:remId", authenticationMiddleware, notifyUser);

module.exports = router;
