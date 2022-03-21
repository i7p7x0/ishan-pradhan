const Message = require("../models/Message");
const Contact = require("../models/Contact");
const ERROR = require("../data/Error");

//----------------- get messages -----------------//
exports.getMessages = (req, res, next) => {
  Message.find((err, message) => {
    if (err) {
      return res.json(ERROR);
    }
    res.json(message);
  });
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

//----------------- get contacts -----------------//
exports.getContact = (req, res, next) => {
  Contact.find((err, contact) => {
    if (err) {
      res.json(ERROR);
    }
    res.json(contact);
  });
};
//----------------- post contacts -----------------//
exports.addContact = (req, res, next) => {
  const contact = new Contact({
    contact:"contact",
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    location: req.body.location,
    freelance: req.body.freelance,
    recruitment: req.body.recruitment,
  });

  contact.save();
  return res.send("saved");
};
//----------------- patch contacts -----------------//
exports.updateContact = (req, res, next) => {

  const newContact = new Contact({
    phoneNumber: req.body.phoneNumber,
    emailAddress: req.body.emailAddress,
    location: req.body.location,
    freelance: req.body.freelance,
    recruitment: req.body.recruitment,
  });

  Contact.updateOne(
    { contact:"contact" },
    {
      phoneNumber: newContact.phoneNumber,
      emailAddress: newContact.emailAddress,
      location: newContact.location,
      freelance: newContact.freelance,
      recruitment: newContact.recruitment,
    },
    (err) => {}
  );
  return res.send("updated");
};
