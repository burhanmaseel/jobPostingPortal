const mongoose = require("mongoose");

const dropdownSchema = new mongoose.Schema(
  {
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
    }
  },
  { collection: "Dropdowns" }
);

//This sets timestamps of createdAt and updatedAt along with each document created
dropdownSchema.set("timestamps", true);

module.exports = mongoose.model("Dropdowns", dropdownSchema);
