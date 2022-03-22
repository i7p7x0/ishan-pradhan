const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experiencePointsSchema = new Schema({
  point: { type: String },
});

const experienceSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  employer: {
    type: String,
    required: true,
  },
  domain: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  employerAddress: {
    type: String,
    required: true,
  },
  experiencePoints: [experiencePointsSchema],
});

exports.ExperiencePoints = mongoose.model(
  "ExperiencePoints",
  experiencePointsSchema
);
exports.Experience = mongoose.model("Experience", experienceSchema);
