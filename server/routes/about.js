const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/authenticateToken");
//----------------- about-controller -----------------//
const aboutController = require("../controllers/about");
//----------------- bio-routes -----------------//
router
  .route("/bio")
  .get(aboutController.getBio)
  // .post(aboutController.addBio)
  .patch(authenticateToken, aboutController.updateBio);
//----------------- properties-routes -----------------//
router
  .route("/properties")
  .get(aboutController.getProperties)
  // .post(aboutController.addProperty)
  .patch(authenticateToken, aboutController.updateProperty);
//----------------- skill-routes -----------------//
router
  .route("/skills")
  .get(aboutController.getSkill)
  .post(authenticateToken, aboutController.addSkill)
  .delete(authenticateToken, aboutController.deleteSkill);
module.exports = router;
