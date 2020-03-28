const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
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
      required: true
    },
    oldPasswords: [{
      type: String
    }]
  },
  { collection: "Admins" }
);

//This sets timestamps of createdAt and updatedAt along with each document created
adminSchema.set("timestamps", true);

adminSchema.virtual('fullName').get(function () {
  return this.firstName + this.lastName;
});

module.exports = mongoose.model("Admins", adminSchema);
