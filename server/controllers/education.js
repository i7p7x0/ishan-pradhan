const Education = require("../models/Education");
const ERROR = require("../data/Error");
const Validations = require("../utils/validateInput");
// errors
const fatalError = require("../constants/errors/FatalError");
const inputError = require("../constants/errors/InputError");
const noError = require("../constants/errors/NoError");
//----------------- get education -----------------//
exports.getEducation = async (req, res, next) => {
  let education;
  try {
    education = await Education.find();
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(education);
};
//----------------- post education -----------------//

exports.postEducation = async (req, res, next) => {
  const education = new Education({
    degreeName: req.body.degreeName,
    university: req.body.university,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    about: req.body.about,
  });
  try {
    if (!Validations.validateEducation(education)) {
      throw new Error("");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await education.save();
  } catch (error) {
    return res.json(fatalError);
  }
  return res.json(noError);
};

//----------------- patch education -----------------//
exports.updateEducation = async (req, res, next) => {
  const newEducation = new Education({
    degreeName: req.body.degreeName,
    university: req.body.university,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    about: req.body.about,
  });
  try {
    if (!Validations.validateEducation(newEducation)) {
      throw new Error("");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await Contact.updateOne(
      { id: req.body.id },
      {
        degreeName: newEducation.degreeName,
        university: newEducation.university,
        startDate: newEducation.startDate,
        endDate: newEducation.endDate,
        about: newEducation.about,
      }
    );
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};

//----------------- delete education -----------------//
exports.deleteEducation = async (req, res, next) => {
  const id = req.body.id;
  try {
    if (id === undefined) {
      throw new Error("Error");
    }
  } catch (error) {
    return res.json(inputError);
  }
  try {
    await Education.deleteOne({ _id: id });
  } catch (error) {
    return res.json(fatalError);
  }

  return res.json(noError);
};
