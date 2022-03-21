const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  degreeName: { required: true, type: String },
  university: { required: true, type: String },
  startDate: { required: true, type: String },
  endDate: { required: true, type: String },
  about: { required: true, type: String },
});

module.exports = new mongoose.model("Education", educationSchema);
