const Message = require("../models/Message");
const ERROR = require("../data/Error");

//----------------- get messages -----------------//
exports.getMessages = (req, res, next) => {
  console.log(
    Message.find((err, message) => {
      if (err) {
        res.json(ERROR);
      }
      res.json(message);
    })
  );
};
//----------------- post message -----------------//
exports.postMessages = (req, res, next) => {
  const message = new Message({
    name: req.body.name,
    emailAddress: req.body.emailAddress,
    subject: req.body.subject,
    message: req.body.message,
  });
  message.save();

  return res.send("saved");
};
//----------------- delete message -----------------//
exports.deleteMessages = (req, res, next) => {
  const id = req.body.id;
  Message.deleteOne({ _id: id }, (err) => {
    if (err !== null) {
      return res.json(ERROR);
    }
  });
  return res.send("deleted");
};
