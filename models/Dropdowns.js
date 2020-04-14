const mongoose = require("mongoose");

const dropdownSchema = new mongoose.Schema({
  
}, { collection: "Dropdowns" });

//This sets timestamps of createdAt and updatedAt along with each document created
dropdownSchema.set("timestamps", true);

module.exports = mongoose.model("Dropdowns", dropdownSchema);
