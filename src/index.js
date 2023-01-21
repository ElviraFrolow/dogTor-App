const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { userRouter } = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => console.log("Server listening on Port", PORT));
