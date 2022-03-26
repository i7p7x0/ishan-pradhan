const express = require("express");
const router = express.Router();

const experienceController = require("../controllers/experience");

router
  .route("/")
  .get(experienceController.getExperience)
  .post(experienceController.addExperience)
  .patch(experienceController.updateExperience)
  .delete(experienceController.deleteExperience);

module.exports = router;
