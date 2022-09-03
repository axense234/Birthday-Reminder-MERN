const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: [20, "Please provide a shorter username."],
      required: [true, "Please provide username."],
    },
    email: {
      type: String,
      unique: [true, "Please provide an unique email."],
      required: [true, "Please provide email."],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email.",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide password."],
      minlength: [10, "Please provide a longer password."],
    },
    createdAt: {
      type: Date,
      default: new Date().toUTCString(),
    },
    reminderCount: {
      type: Number,
      default: 0,
    },
    imageSecureUrl: {
      type: String,
      default: "",
    },
    subscription: {
      type: Object,
      default: {},
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { id: this._id, name: this.username },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  );
};

UserSchema.methods.comparePassword = async function (pass) {
  const isMatch = await bcrypt.compare(pass, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
