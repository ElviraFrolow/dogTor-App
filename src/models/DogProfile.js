const mongoose = require("mongoose");

const avatarPlaceholder =
  "https://cdn.dribbble.com/users/2582763/screenshots/10711217/kutyakok-02.jpg";

const dogProfileSchema = new mongoose.Schema(
  {
    petName: { type: String, required: true },
    petDateOfBirth: { type: Date, required: true },
    color: { type: String, required: true },
    dogBreed: { type: String, required: avatarPlaceholder },
    medicalComplaints: { type: String, required: avatarPlaceholder },
    profilePicture: { type: String, required: avatarPlaceholder },
    givenFood: { type: String, required: avatarPlaceholder },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("DogProfile", dogProfileSchema);
module.exports = User;
