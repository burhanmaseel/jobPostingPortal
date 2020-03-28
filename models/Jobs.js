const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    company: {
      type: String
    },
    address: {
      streetAddress: {
        type: String
      },
      city: {
        type: String
      },
      country: {
        type: String
      },
      postalCode: {
        type: String
      }
    },
    description: {
      type: String
    },
    logo: {
      type: Buffer
    },
    link: {
      type: String
    }
  },
  { collection: "Jobs" }
);

//This sets timestamps of createdAt and updatedAt along with each document created
jobSchema.set("timestamps", true);

module.exports = mongoose.model("Jobs", jobSchema);
