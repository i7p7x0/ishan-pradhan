// return types:boolean
// return value: true if validation passsed and false if validation failed

/*----------------- Validate Phone Number ------------------------------
Phone number should be 10-13 characters long and contain only numbers.
----------------------------------------------------------------------*/
const validatePhoneNumber = (phoneNumber) => {
  if (
    phoneNumber.length >= 10 &&
    phoneNumber.length <= 13 &&
    /^\d+$/.test(phoneNumber)
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
    emailAddress.length > 3 &&
    emailAddress.length <= 100 &&
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
  ) {
    return true;
  }
  return false;
};

const validateBoolEntry = (entry) => {
  if (typeof entry === "boolean") {
    return true;
  }
  return false;
};

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

exports.validateContact = validateContact;
