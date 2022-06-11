const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  
  desc: {
    type: String,
    required: true,
  },
  complete: {
    type: Number,
    required: false,
  },
  comment: {
    type: String,
    required: false,
  },
  
});

module.exports = mongoose.model("User", userSchema);
