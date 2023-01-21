const User = require("../../models/User");
const { createHash } = require("../utilities/createHash");
const { createRandomSalt } = require("../utilities/createHash");

async function registerUser({
  firstname,
  lastname,
  email,
  password,
  profilePicture,
  bio,
}) {
  const foundUser = await User.findOne({ email }).exec();

  if (foundUser) {
    throw new Error("User with this email already exists");
  }
  const passwordSalt = createRandomSalt();
  const passwordHash = createHash(`${password}${passwordSalt}`);

  const newUser = await User.create({
    firstname,
    lastname,
    email,
    profilePicture,
    passwordHash,
    passwordSalt,
    bio,
  });
  return newUser;
}

module.exports = {
  registerUser,
};
