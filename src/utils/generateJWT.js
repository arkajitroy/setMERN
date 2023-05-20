const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

function generateJWT(id) {
  return jwt.sign({ id }, JWT_SECRET_KEY, {
    expiresIn: "30d",
  });
}

module.exports = { generateJWT };
