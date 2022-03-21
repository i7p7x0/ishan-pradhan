const Education = require("../models/Education");
const ERROR = require("../data/Error");

//----------------- get education -----------------//
exports.getEducation = (req, res, next) => {
  Education.find((err, education) => {
    if (err) {
      return res.json(ERROR);
    }
    res.json(education);
  });
};
//----------------- post education -----------------//

exports.postEducation = (req, res, next) => {
  const education = new Education({
    degreeName: req.body.degreeName,
    university: req.body.university,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    about: req.body.about,
  });
  education.save();
  return res.send("saved");
};

//----------------- post education -----------------//
exports.updateEducation = (req, res, next) => {
  const newEducation = new Education({
    degreeName: req.body.degreeName,
    university: req.body.university,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    about: req.body.about,
  });

  Contact.updateOne(
    { id: req.body.id },
    {
      degreeName: newEducation.degreeName,
      university: newEducation.university,
      startDate: newEducation.startDate,
      endDate: newEducation.endDate,
      about: newEducation.about,
    },
    (err) => {}
  );
  return res.send("updated");
};

//----------------- delete education -----------------//
exports.deleteEducation = (req, res, next) => {
  const id = req.body.id;
  Education.deleteOne({ _id: id }, (err) => {
    if (err !== null) {
      return res.json(ERROR);
    }
  });
  return res.send("deleted");
};
