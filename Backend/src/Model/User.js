var mongoose = require("mongoose");
var user_data = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Status: Number,
});

var user_model = mongoose.model("user", user_data);

module.exports = user_model;
