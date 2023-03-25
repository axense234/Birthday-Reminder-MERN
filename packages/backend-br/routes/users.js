const express = require("express");

const router = express.Router();

// Controllers and middleware
const { getAllUsers, getUser, updateUser } = require("../controllers/users");
const authenticationMiddleware = require("../middleware/authentication");

router.get("/", getAllUsers);
router.get("/profile", authenticationMiddleware, getUser);
router.patch("/profile", authenticationMiddleware, updateUser);

module.exports = router;
