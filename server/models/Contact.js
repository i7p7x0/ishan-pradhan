const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  contact: { type: String },
  phoneNumber: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  freelance: {
    type: Boolean,
    required: true,
  },
  recruitment: {
    type: Boolean,
    required: true,
  },
});

module.exports = new mongoose.model("Contact", contactSchema);
