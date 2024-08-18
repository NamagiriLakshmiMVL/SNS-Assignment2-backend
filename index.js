const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const userRoute = require("./routes/userRouter");

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose is connected");
    app.listen(PORT, () => console.log("Server Started on the Port", PORT));
  })
  .catch((err) => {
    console.log("Error", err);
  });
