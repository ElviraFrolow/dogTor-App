const crypto = require("crypto");

function createHash(input) {
  return crypto.createHash("sha512").update(input, "utf-8").digest("hex");
}

function createRandomSalt() {
  const saltLenght = 32;
  return crypto.randomBytes(saltLenght).toString("hex");
}

module.exports = {
  createHash,
  createRandomSalt,
};
