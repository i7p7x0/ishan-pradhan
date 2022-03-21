const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
  skillType: { type: String, required: true },
  skillName: { type: String, required: true },
});
