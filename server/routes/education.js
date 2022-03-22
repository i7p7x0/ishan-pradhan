const express = require("express");
const router = express.Router();
//----------------- education-controller -----------------//
const educationController = require("../controllers/education");
//----------------- education-routes -----------------//
router
  .route("/")
  .get(educationController.getEducation)
  .post(educationController.postEducation)
  .patch(educationController.updateEducation)
  .delete(educationController.deleteEducation);

module.exports = router;
