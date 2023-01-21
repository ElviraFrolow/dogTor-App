const { loginUser } = require("./use-cases/login-user");
const { registerUser } = require("./use-cases/register-user");

const UserService = {
  loginUser,
  registerUser,
};

module.exports = {
  UserService,
};
