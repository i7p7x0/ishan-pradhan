const Bio = require("../models/Bio");
const Property = require("../models/Property");
const Skill = require("../models/Skill");
const ERROR = require("../data/Error");
//----------------- get bio -----------------//
exports.getBio = async(req, res, next) => {
  const bio = await Bio.find();
  res.json(bio);
};
//----------------- post bio -----------------//
exports.addBio = (req, res, next) => {
  const bio = new bio({
    bio: "bio",
    content: req.body.content,
  });

  contact.save();
  return res.send("saved");
};
//----------------- patch bio -----------------//
exports.updateBio = (req, res, next) => {
  const newBio = new Bio({
    content: req.body.content,
  });

  Contact.updateOne(
    { bio: "bio" },
    {
      content: newBio.content,
    },
    (err) => {}
  );
  return res.send("updated");
};
//----------------- get properties -----------------//
exports.getProperties = async(req, res, next) => {
  const property = await Property.find();
  res.json(property);
};
//----------------- post property -----------------//
exports.addProperty = (req, res, next) => {
  const property = new Property({
    property: "property",
    age: req.body.age,
    residence: req.body.residence,
    emailAddress: req.body.emailAddress,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    experience: req.body.experience,
  });

  property.save();
  return res.send("saved");
};
//----------------- patch bio -----------------//
exports.updateProperty = (req, res, next) => {
  const newProperty = new Property({
    age: req.body.age,
    residence: req.body.residence,
    emailAddress: req.body.emailAddress,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    experience: req.body.experience,
  });

  Contact.updateOne(
    { property: "property" },
    {
      age: newProperty.age,
      residence: newProperty.residence,
      emailAddress: newProperty.emailAddress,
      address: newProperty.address,
      phoneNumber: newProperty.phoneNumber,
      experience: newPropertyy.experience,
    },
    (err) => {}
  );
  return res.send("updated");
};
//----------------- get skill -----------------//
exports.getSkill = async(req, res, next) => {
  const skill = await Skill.find();
  res.json(skill);
};
//----------------- post skill -----------------//
exports.addSkill = (req, res, next) => {
  const skill = new Skill({
    skillType: req.body.skillType,
    skillName: req.body.skillName,
  });

  skill.save();
  return res.send("saved");
};
//----------------- delete skill -----------------//
exports.deleteSkill = (req, res, next) => {
  const id = req.body.id;
  Skill.deleteOne({ _id: id }, (err) => {
    if (err !== null) {
      return res.json(ERROR);
    }
  });
  return res.send("deleted");
};
