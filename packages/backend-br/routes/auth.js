const express = require("express");

const router = express.Router();

// Controllers
const { signupUser, loginUser } = require("../controllers/auth");

router.post("/signup", signupUser);
router.post("/login", loginUser);

module.exports = router;
