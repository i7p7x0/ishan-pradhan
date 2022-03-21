const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/authenticateToken");
//----------------- message-controller -----------------//
const contactController = require("../controllers/contact");

//----------------- messages-routes -----------------//
router
  .route("/")
  .get(authenticateToken, contactController.getMessages)
  .post(contactController.postMessages)
  .delete(contactController.deleteMessages);

//----------------- contact-details-routes -----------------//
router
  .route("/contactDetails/")
  .get(contactController.getContact)
  .post(contactController.addContact)
  .patch(contactController.updateContact);
module.exports = router;
