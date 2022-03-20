const ExperienceModels = require("../models/Experience");

//----------------- get experiences -----------------//
exports.getExperience = (req, res, next) => {
  ExperienceModels.Experience.find((err, experience) => {
    if (err) {
      res.json(err);
    }
    res.json(experience);
  });
};

//----------------- post experience -----------------//
exports.addExperience = (req, res, next) => {
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

  newExperience.save();
  res.send("Saved");
};
//----------------- delete experience -----------------//
exports.deleteExperience = (req, res, next) => {
  const id = req.body.id;
  ExperienceModels.Experience.deleteOne({ _id: id }, (err) => {
    if (err !== null) {
      return res.json(ERROR);
    }
  });
  return res.send("deleted");
};
