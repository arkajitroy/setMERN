const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
  getAllUsers,
} = require("../../controllers/users/users.controller");
const { authMiddleware } = require("../../middlewares/auth.middleware");

// routes
router.get("/", getAllUsers);
router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/getMe", authMiddleware, getMe);

module.exports = router;
