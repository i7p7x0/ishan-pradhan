const Education = require("../models/Education");
const ERROR = require("../data/Error");

//----------------- get education -----------------//
exports.getEducation = async (req, res, next) => {
  const education = await Education.find();
  res.json(education);
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
  await education.save();
  return res.send("saved");
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
  return res.send("updated");
};

//----------------- delete education -----------------//
exports.deleteEducation = async (req, res, next) => {
  const id = req.body.id;
  await Education.deleteOne({ _id: id });
  return res.send("deleted");
};
