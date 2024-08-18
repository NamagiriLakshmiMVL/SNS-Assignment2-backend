const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: Number, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

const userModel = mongoose.model("UsersLogged", userSchema);

module.exports = userModel;
