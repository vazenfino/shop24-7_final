const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  phone: Number,
  profilePic: {
    type: String,
    default: "https://picsum.photos/id/1/200/300",
  },
  address: String,
  admin: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", userSchema);
