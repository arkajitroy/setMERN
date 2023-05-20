const express = require("express");
const app = express();

// routes
app.use("/auth", require("./auth/auth.routes"));

module.exports = app;
