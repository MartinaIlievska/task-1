const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    unique: [true, "Email adress it's already in use"],
    required: [true, "Email address is required"],
    validate: [validator.isEmail, "Ve molime vnesete validen email"],
  },
  password: {
    type: String,
    minlenght: 8,
    required: [true, "Strong password is required"],
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  name: {
    type: String,
    required: [true, "Write your name"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
