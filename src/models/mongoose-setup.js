const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;

async function connectToDataBase() {
  try {
    console.log("Connecting to database...");
    console.log("Database connection String:", MONGO_URL);
    await mongoose.connect(MONGO_URL, {
      dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log("Error connecting to database, will abort");
    console.log(error);
    process.exit(1);
  }
}

module.exports = {
  connectToDataBase,
};
