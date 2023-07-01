const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  profile,
  getAllUsers,
} = require("../../controllers/users/users.controller");
const { authMiddleware } = require("../../middlewares/auth.middleware");
const validator = require("../../middlewares/validator.middleware");
const authValidators = require("../../middlewares/validators/auth/registerUser.validator.js");

// routes
router.get("/", getAllUsers);
router.post("/register", validator(authValidators), registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, profile);

module.exports = router;
