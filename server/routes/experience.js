const express = require("express");
const router = express.Router();

const experienceController = require("../controllers/experience");

router
  .route("/")
  .get(experienceController.getExperience)
  .post(experienceController.addExperience)
  .delete(experienceController.deleteExperience);

module.exports = router;
