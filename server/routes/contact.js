const express = require("express");
const router = express.Router();
const authenticateToken = require("../utils/authenticateToken");
//----------------- message-controller -----------------//
const contactController = require("../controllers/contact");

router
  .route("/")
  .get(authenticateToken, contactController.getMessages)
  .post(contactController.postMessages)
  .delete(contactController.deleteMessages);
module.exports = router;
