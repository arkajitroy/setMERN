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
const validators = require("../../middlewares/validators/index.js");

// required validator
const { registerUserValidator } = validators.auth;

// routes
router.get("/", getAllUsers);
router.post("/", validator(registerUserValidator), registerUser);
router.post("/login", loginUser);
router.get("/profile", authMiddleware, profile);

module.exports = router;
