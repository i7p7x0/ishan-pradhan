const Admin = require("../models/Admin");

exports.postAdminCredentials = (req, res, next) => {
  const admin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });
  console.log(admin);
};
