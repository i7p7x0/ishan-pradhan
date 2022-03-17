const express = require("express");
const router = express.Router();
//----------------- message-controller -----------------//
const contactController = require("../controllers/contact");
router
  .route("/")
  .get(contactController.getMessages)
  .post(contactController.postMessages)
  .delete(contactController.deleteMessages);
module.exports = router;
