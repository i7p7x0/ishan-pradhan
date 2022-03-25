const express = require("express");
const router = express.Router();
//----------------- about-controller -----------------//
const aboutController = require("../controllers/about");
//----------------- bio-routes -----------------//
router
  .route("/bio")
  .get(aboutController.getBio)
  // .post(aboutController.addBio)
  .patch(aboutController.updateBio);
//----------------- properties-routes -----------------//
router
  .route("/properties")
  .get(aboutController.getProperties)
  .post(aboutController.addProperty)
  .patch(aboutController.updateProperty);
//----------------- skill-routes -----------------//
router
  .route("/skills")
  .get(aboutController.getSkill)
  .post(aboutController.addSkill)
  .delete(aboutController.deleteSkill);
module.exports = router;
