const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/authenticateToken");

const experienceController = require("../controllers/experience");

router
  .route("/")
  .get(experienceController.getExperience)
  .post(authenticateToken, experienceController.addExperience)
  .patch(authenticateToken, experienceController.updateExperience)
  .delete(authenticateToken, experienceController.deleteExperience);

module.exports = router;
