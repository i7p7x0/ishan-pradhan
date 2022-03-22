const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  property: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  residence: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("Property", propertySchema);
