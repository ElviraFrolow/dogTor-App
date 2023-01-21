const mongoose = require("mongoose");

const avatarPlaceholder =
  "https://cdn.dribbble.com/users/2582763/screenshots/10711217/kutyakok-02.jpg";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    profilePicture: { type: String, required: avatarPlaceholder },
    bio: { type: String, default: "Hi Im using DogTor" },
    passwordHash: { type: String, required: true },
    passwordSalt: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
