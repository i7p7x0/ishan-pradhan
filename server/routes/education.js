const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/authenticateToken");
//----------------- education-controller -----------------//
const educationController = require("../controllers/education");
//----------------- education-routes -----------------//
router
  .route("/")
  .get(educationController.getEducation)
  .post(authenticateToken,educationController.postEducation)
  .patch(authenticateToken,educationController.updateEducation)
  .delete(authenticateToken,educationController.deleteEducation);

module.exports = router;
