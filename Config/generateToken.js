const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "my-secret", {
    expiresIn: "30d",
  });
};
module.exports = generateToken;
