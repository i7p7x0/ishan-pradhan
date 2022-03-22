const ExperienceModels = require("../models/Experience");

//----------------- get experiences -----------------//
exports.getExperience = async (req, res, next) => {
  const experience = await ExperienceModels.Experience.find();
  res.json(experience);
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

  await newExperience.save();
  res.send("Saved");
};
//----------------- delete experience -----------------//
exports.deleteExperience =async (req, res, next) => {
  const id = req.body.id;
  await ExperienceModels.Experience.deleteOne({ _id: id });
  return res.send("deleted");
};
