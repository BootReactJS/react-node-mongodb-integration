const mongoose = require("mongoose");

const userSchemaClass = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}, { timestamps: true });


//module.exports = mongoose.model("User", userSchemaClass, "users");
module.exports = mongoose.model("User", userSchemaClass, "users");