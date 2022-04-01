const ExperienceModels = require("../models/Experience");
const Validations = require("../utils/validateInput");
// errors
const fatalError = require("../constants/errors/FatalError");
const inputError = require("../constants/errors/InputError");
const noError = require("../constants/errors/NoError");

//----------------- get experiences -----------------//
exports.getExperience = async (req, res, next) => {
  let experience;
  try {
    experience = await ExperienceModels.Experience.find();
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(experience);
};

//----------------- post experience -----------------//
exports.addExperience = async (req, res, next) => {
  const {
    title,
    employer,
    domain,
    from,
    to,
    employerAddress,
    experiencePoints,
  } = req.body;

  const newExperiencePoints = experiencePoints.map((experience) => {
    return new ExperienceModels.ExperiencePoints(experience);
  });

  const newExperience = new ExperienceModels.Experience({
    title: title,
    employer: employer,
    domain: domain,
    from: from,
    to: to,
    employerAddress: employerAddress,
    experiencePoints: newExperiencePoints,
  });

  try {
    if (!Validations.validateExperience(newExperience)) {
      throw new Error("Error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await newExperience.save();
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(noError);
};
//----------------- delete experience -----------------//
exports.deleteExperience = async (req, res, next) => {
  const id = req.body.id;
  
  try {
    if (id === undefined) {
      throw new Error("Error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await ExperienceModels.Experience.deleteOne({ _id: id });
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(noError);
};

exports.updateExperience = async (req, res, next) => {
  const id = req.body.id;
  const to = req.body.to;
  try {
    if (id === undefined || to === undefined) {
      throw new Error("Error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    if (to.length < 4 || to.length > 10) {
      throw new Error("Error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await ExperienceModels.Experience.updateOne({ _id: id }, { to: to });
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(noError);
};
