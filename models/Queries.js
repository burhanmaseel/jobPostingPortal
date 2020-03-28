const mongoose = require("mongoose");

const querySchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    description: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  { collection: "Queries" }
);

//This sets timestamps of createdAt and updatedAt along with each document created
querySchema.set("timestamps", true);

module.exports = mongoose.model("Queries", querySchema);
