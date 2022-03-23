const Bio = require("../models/Bio");
const Property = require("../models/Property");
const Skill = require("../models/Skill");

const Validations = require("../utils/validateInput");
// errors
const fatalError = require("../constants/errors/FatalError");
const inputError = require("../constants/errors/InputError");
const noError = require("../constants/errors/NoError");
//----------------- get bio -----------------//
exports.getBio = async (req, res, next) => {
  let bio;
  try {
    bio = await Bio.find();
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(bio);
};
//----------------- post bio -----------------//
exports.addBio = async (req, res, next) => {
  const bio = new Bio({
    bio: "bio",
    content: req.body.content,
  });
  try {
    if (!Validations.validateBio(bio)) {
      throw new Error("error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await bio.save();
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};
//----------------- patch bio -----------------//
exports.updateBio = async (req, res, next) => {
  const newBio = new Bio({
    content: req.body.content,
  });
  try {
    if (!Validations.validateBio(newBio)) {
      throw new Error("error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await Bio.updateOne(
      { bio: "bio" },
      {
        content: newBio.content,
      }
    );
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};
//----------------- get properties -----------------//
exports.getProperties = async (req, res, next) => {
  let property;
  try {
    property = await Property.find();
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(property);
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
  try {
    if (!Validations.validateProperties(property)) {
      throw new Error("error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await property.save();
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};
//----------------- patch property -----------------//
exports.updateProperty = async (req, res, next) => {
  const newProperty = new Property({
    age: req.body.age,
    residence: req.body.residence,
    emailAddress: req.body.emailAddress,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
    experience: req.body.experience,
  });
  try {
    if (!Validations.validateProperties(property)) {
      throw new Error("error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
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
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(noError);
};
//----------------- get skill -----------------//
exports.getSkill = async (req, res, next) => {
  let skill;
  try {
    skill = await Skill.find();
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(skill);
};
//----------------- post skill -----------------//
exports.addSkill = async (req, res, next) => {
  const skill = new Skill({
    skillType: req.body.skillType,
    skillName: req.body.skillName,
  });
  try {
    if (!Validations.validateSkill(skill)) {
      throw new Error("error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await skill.save();
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};
//----------------- delete skill -----------------//
exports.deleteSkill = async (req, res, next) => {
  const id = req.body.id;
  try {
    if (id === undefined) throw new Error("Error");
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await Skill.deleteOne({ _id: id });
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};
