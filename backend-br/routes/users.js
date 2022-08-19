const express = require("express");
const router = express.Router();

// Authentication Middleware
const authenticationMiddleware = require("../middleware/authentication");

const { getAllUsers, getUser, updateUser } = require("../controllers/users");

router.get("/", getAllUsers);
router.get("/profile", authenticationMiddleware, getUser);
router.patch("/profile", authenticationMiddleware, updateUser);

module.exports = router;
