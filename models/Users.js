const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
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
    universityPreferences: [{
      type: 
    }],
    searchesQuesries: [{
      
    }]
  },
  { collection: "Users" }
);

//This sets timestamps of createdAt and updatedAt along with each document created
userSchema.set("timestamps", true);

module.exports = mongoose.model("Users", userSchema);
