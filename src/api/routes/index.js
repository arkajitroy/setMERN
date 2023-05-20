const express = require("express");
const app = express();

// routes
app.use("/user", require("./users/user.routes"));

module.exports = app;
