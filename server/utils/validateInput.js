// return types:boolean
// return value: true if validation passsed and false if validation failed

const { text } = require("body-parser");

/*----------------- Validate Length ------------------------------
Param 1 : string, param: 2 min length, param 3:max length
----------------------------------------------------------------------*/
const validateLength = (text, minLength, maxLength) => {
  if (text.length >= minLength && text.length <= maxLength) {
    return true;
  }
  return false;
};
/*----------------- Validate Phone Number ------------------------------
Phone number should be 10-13 characters long and contain only numbers.
----------------------------------------------------------------------*/
const validatePhoneNumber = (phoneNumber) => {
  if (validateLength(phoneNumber, 10, 13) && /^\d+$/.test(phoneNumber)) {
    return true;
  }
  return false;
};
/*----------------- Validate Username ------------------------------
Phone number should be 3-16 characters long and contain only alphabets.
----------------------------------------------------------------------*/
const validateUsername = (username) => {
  if (
    validateLength(username, 3, 16) &&
    /^[a-zA-Z]/.test(username.replace(/\s/g, ""))
  ) {
    return true;
  }
  return false;
};

/*----------------- Validate Email Address --------------------------------------
Email address should be between 3-100 characters and should be a valid email type.
--------------------------------------------------------------------------------*/
const validateEmailAddress = (emailAddress) => {
  if (
    validateLength(emailAddress, 3, 100) &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
  ) {
    return true;
  }
  return false;
};
/*----------------- Validate booeal --------------------------------------------
value must be either true or false
--------------------------------------------------------------------------------*/
const validateBoolEntry = (entry) => {
  if (typeof entry === "boolean") {
    return true;
  }
  return false;
};
/*----------------- Validate year ----------------------------------------------
Year must be 4 characters long and should only contain numbers
--------------------------------------------------------------------------------*/
const validateYear = (date) => {
  if (validateLength(date, 4, 4) && /^\d+$/.test(date)) {
    return true;
  }
  return false;
};

/*---------------------------Validation used in contact controller-------------*/
const validateContact = (contact) => {
  if (
    contact.phoneNumber === undefined ||
    contact.emailAddress === undefined ||
    contact.location === undefined ||
    contact.freelance === undefined ||
    contact.recruitment === undefined
  ) {
    return false;
  }
  if (
    !validatePhoneNumber(contact.phoneNumber) ||
    !validateEmailAddress(contact.emailAddress) ||
    !validateBoolEntry(contact.freelance) ||
    !validateBoolEntry(contact.recruitment)
  ) {
    return false;
  }
  return true;
};
/*---------------------------Validation used in contact/message controller-------------*/
const validateMessage = (message) => {
  if (
    message.name === undefined ||
    message.emailAddress === undefined ||
    message.subject === undefined ||
    message.message === undefined
  ) {
    return false;
  }
  if (
    !validateEmailAddress(message.emailAddress) ||
    !validateUsername(message.name) ||
    !validateLength(message.subject, 3, 998) ||
    !validateLength(message.message, 10, 1000)
  ) {
    return false;
  }
  return true;
};

/*---------------------------Validation used in education controller-------------*/
const validateEducation = (education) => {
  if (
    education.degreeName === undefined ||
    education.university === undefined ||
    education.startDate === undefined ||
    education.endDate === undefined ||
    education.about === undefined
  ) {
    return false;
  }
  if (
    !validateLength(education.degreeName, 10, 100) ||
    !validateLength(education.university, 10, 100) ||
    !validateYear(education.startDate) ||
    !validateYear(education.endDate) ||
    !validateLength(education.about, 10, 1000)
  ) {
    return false;
  }
  return true;
};

const validateExperience = (experience) => {
  if (
    experience.title === undefined ||
    experience.employer === undefined ||
    experience.domain === undefined ||
    experience.from === undefined ||
    experience.to === undefined ||
    experience.employerAddress === undefined
  ) {
    return false;
  }
  if (
    !validateLength(experience.title, 10, 50) ||
    !validateLength(experience.employer, 1, 100) ||
    !validateLength(experience.domain, 5, 100) ||
    !validateLength(experience.from, 5, 20) ||
    !validateLength(experience.to, 5, 20) ||
    !validateLength(experience.employerAddress, 10, 1000)
  ) {
    return false;
  }
  return true;
};

const validateBio = (bio) => {
  console.log(bio.content);
  if (bio.content === undefined) {
    return false;
  }
  if (!validateLength(bio.content, 10, 50000)) {
    return false;
  }
  return true;
};

const validateProperties = (property) => {
  if (
    property.age === undefined ||
    property.residence === undefined ||
    property.emailAddress === undefined ||
    property.address === undefined ||
    property.phoneNumber === undefined ||
    property.experience === undefined
  ) {
    return false;
  }
  if (
    !validateLength(property.age, 2, 2) ||
    !validateLength(property.residence, 1, 60) ||
    !validateEmailAddress(property.emailAddress) ||
    !validateLength(property.experience, 5, 50)
  ) {
    return false;
  }
  return true;
};

const validateSkill = (skill) => {
  if (skill.skillType === undefined || skill.skillName === undefined) {
    return false;
  }
  if (
    !validateLength(skill.skillType, 2, 25) ||
    !validateLength(skill.skillName, 2, 25)
  ) {
    return false;
  }
  return true;
};

exports.validateSkill = validateSkill;
exports.validateProperties = validateProperties;
exports.validateBio = validateBio;
exports.validateExperience = validateExperience;
exports.validateEducation = validateEducation;
exports.validateContact = validateContact;
exports.valdidateMessage = validateMessage;
