/*-----------------------------------------------------------
This script validates the inputs given by user in contact form
------------------------------------------------------------*/

/*
This method validates username
i. Check if username is empty
ii. Check if username has non alphabetic characters
iii. Check if username is lesser than 4 characters
iv. Check if username is greater than 16 characters
*/
export const validateUsername = (fullname) => {
  let username = {
    errorMessages: [],
    isValidated: true,
  };
  // i. Check if username is empty
  if (fullname.length === 0) {
    let errorMessage = "Name is required*";
    username.errorMessages.push({ errorMessage: errorMessage });
    username.isValidated = false;
    return username;
  }
  // ii. Check if username has non alphabetic characters
  if (/[^a-zA-Z]/.test(fullname.replace(/\s/g, ""))) {
    let errorMessage = "Name can only have alphabets [a-z]*";
    username.errorMessages.push({ errorMessage: errorMessage });
    username.isValidated = false;
  }
  /*
     iii. Check if username is lesser than 4 characters
     iv. Check if username is greater than 16 characters
 */
  if (fullname.replace(/\s/g, "").length < 3 || fullname.length > 16) {
    let errorMessage = "Name must be between [4-16] characters*";
    username.errorMessages.push({ errorMessage: errorMessage });
    username.isValidated = false;
  }
  return username;
};

/*
This method validates subject
i. Check if subject is empty
ii. Check if subject length is lesser t han 4 characters
iii. Check if subject length is greater than 998 characters
*/
export const validateSubject = (subject) => {
  let userSubject = {
    errorMessages: [],
    isValidated: true,
  };
  //i. Check if subject is empty
  if (subject.length === 0) {
    let errorMessage = "Subject is required*";
    userSubject.errorMessages.push({ errorMessage: errorMessage });
    userSubject.isValidated = false;
    return userSubject;
  }
  /*
 ii. Check if subject length is lesser t han 4 characters
 iii. Check if subject length is greater than 998 characters
*/
  if (subject.replace(/\s/g, "").length < 3 || subject.length > 998) {
    let errorMessage = "Subject must be [4-998] characters*";
    userSubject.errorMessages.push({ errorMessage: errorMessage });
    userSubject.isValidated = false;
  }
  return userSubject;
};

/*
This method validates user email address
i. Check if email address is empty
ii. Check if email is valid
iii. Check if email length is valid
*/
export const validateEmail = (email) => {
  let userEmail = {
    errorMessages: [],
    isValidated: true,
  };
  // Check if email address is empty
  if (email.length === 0) {
    let errorMessage = "Eail Address is required*";
    userEmail.errorMessages.push({ errorMessage: errorMessage });
    userEmail.isValidated = false;
    return userEmail;
  }

  //   Check if email length is valid
  if (email.replace(/\s/g, "").length < 3 || email.length > 64) {
    let errorMessage = "Email must be [3-64] characters*";
    userEmail.errorMessages.push({ errorMessage: errorMessage });
    userEmail.isValidated = false;
    return userEmail;
  }
  //     Check if email is valid
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    let errorMessage = "Invalid Email Address*";
    userEmail.errorMessages.push({ errorMessage: errorMessage });
    userEmail.isValidated = false;
  }
  return userEmail;
};

/*
This method validates user message
i. Check if message address is empty
ii. Check if message length is valid
*/
export const validateMessage = (message) => {
  let userMessage = {
    errorMessages: [],
    isValidated: true,
  };
  //i. Check if message address is empty
  if (message.length === 0) {
    let errorMessage = "Name is required*";
    userMessage.errorMessages.push({ errorMessage: errorMessage });
    userMessage.isValidated = false;
    return userMessage;
  }
  //ii. Check if message length is valid
  if (message.length < 10 || message.length > 10000) {
    let errorMessage = "Message must be [10-10000] characters*";
    userMessage.errorMessages.push({ errorMessage: errorMessage });
    userMessage.isValidated = false;
  }
  return userMessage;
};
