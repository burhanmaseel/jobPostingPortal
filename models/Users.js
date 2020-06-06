const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      default: null
    },
    lastName: {
      type: String,
      default: null
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    // universityPreferences: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'Universities'
    // }],
    searchesQuesries: [
      {
        type: String
      }
    ],
    userType: {
      type: String,
      required: true,
      default: null
    },
    phone: {
      type: String,
      default: null
    }
  },
  { collection: "Users" }
);

//This sets timestamps of createdAt and updatedAt along with each document created
userSchema.set("timestamps", true);

//Do not use Arror functions in mongoose as they change the semantic of THIS keyword
userSchema.methods.createHashPassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return err;
      }
      bcrypt.hash(password, salt, (err, hash) => {
        resolve(hash);
      });
    });
  });
}

userSchema.methods.comparePassword = function (password) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        return err;
      }
      resolve(isMatch);
    });
  });
}

module.exports = mongoose.model("Users", userSchema);
