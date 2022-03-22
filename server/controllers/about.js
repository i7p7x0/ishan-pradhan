const Bio = require("../models/Bio");
const Property = require("../models/Property");
const Skill = require("../models/Skill");
const ERROR = require("../data/Error");
//----------------- get bio -----------------//
exports.getBio = async (req, res, next) => {
  const bio = await Bio.find();
  res.json(bio);
};
//----------------- post bio -----------------//
exports.addBio = async (req, res, next) => {
  const bio = new bio({
    bio: "bio",
    content: req.body.content,
  });

  await contact.save();
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
exports.getProperties = async (req, res, next) => {
  const property = await Property.find();
  res.json(property);
};
//----------------- post property -----------------//
exports.addProperty = async (req, res, next) => {
  const property = new Property({
    property: "property",
    age: req.body.age,
    residence: req.body.residence,
    emailAddress: req.body.emailAddress,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    experience: req.body.experience,
  });

  await property.save();
  return res.send("saved");
};
//----------------- patch bio -----------------//
exports.updateProperty = async (req, res, next) => {
  const newProperty = new Property({
    age: req.body.age,
    residence: req.body.residence,
    emailAddress: req.body.emailAddress,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    experience: req.body.experience,
  });

  await Contact.updateOne(
    { property: "property" },
    {
      age: newProperty.age,
      residence: newProperty.residence,
      emailAddress: newProperty.emailAddress,
      address: newProperty.address,
      phoneNumber: newProperty.phoneNumber,
      experience: newPropertyy.experience,
    }
  );
  return res.send("updated");
};
//----------------- get skill -----------------//
exports.getSkill = async (req, res, next) => {
  const skill = await Skill.find();
  res.json(skill);
};
//----------------- post skill -----------------//
exports.addSkill = async (req, res, next) => {
  const skill = new Skill({
    skillType: req.body.skillType,
    skillName: req.body.skillName,
  });

  await skill.save();
  return res.send("saved");
};
//----------------- delete skill -----------------//
exports.deleteSkill = async (req, res, next) => {
  const id = req.body.id;
  await Skill.deleteOne({ _id: id });
  return res.send("deleted");
};
