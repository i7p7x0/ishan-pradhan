const express = require("express");
const router = express.Router();
//----------------- login-controller -----------------//
const loginController = require("../controllers/login");
router.route("/").post(loginController.postAdminCredentials);
module.exports = router;
