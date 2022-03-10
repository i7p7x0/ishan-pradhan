import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";

// CUSTOM COMPONENTS
import * as formValidations from "../../../scripts/validations/ValidateUserInput";

import "../style/contact-form.css";

const ContactForm = () => {
  // this state will determine whether the user input has any issues after user clicks on send
  const [userInputValidity, setUserInputValidity] = useState({
    fullName: { errorMessages: [], isValidated: true },
    emailAddress: { errorMessages: [], isValidated: true },
    subject: { errorMessages: [], isValidated: true },
    message: { errorMessages: [], isValidated: true },
  });

  //   this state will contain user input
  const [userInput, setUserInput] = useState({
    fullName: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  // this method stores user inputs to the user input state
  const handleUserInput = (event) => {
    let inputChangeType = event.target.id;
    let inputValue = event.target.value;
    switch (inputChangeType) {
      case "user-form-input-name":
        setUserInput((prevValue) => {
          return {
            fullName: inputValue,
            emailAddress: prevValue.emailAddress,
            subject: prevValue.subject,
            message: prevValue.message,
          };
        });

        setUserInputValidity((prevValue) => {
          return {
            fullName: {
              errorMessages: prevValue.fullName.errorMessages,
              isValidated: true,
            },
            emailAddress: {
              errorMessages: prevValue.emailAddress.errorMessages,
              isValidated: prevValue.emailAddress.isValidated,
            },
            subject: {
              errorMessages: prevValue.subject.errorMessages,
              isValidated: prevValue.subject.isValidated,
            },
            message: {
              errorMessages: prevValue.message.errorMessages,
              isValidated: prevValue.message.isValidated,
            },
          };
        });
        //

        break;
      case "user-form-input-email":
        setUserInput((prevValue) => {
          return {
            fullName: prevValue.fullName,
            emailAddress: inputValue,
            subject: prevValue.subject,
            message: prevValue.message,
          };
        });
        setUserInputValidity((prevValue) => {
          return {
            fullName: {
              errorMessages: prevValue.fullName.errorMessages,
              isValidated: prevValue.fullName.isValidated,
            },
            emailAddress: {
              errorMessages: prevValue.emailAddress.errorMessages,
              isValidated: true,
            },
            subject: {
              errorMessages: prevValue.subject.errorMessages,
              isValidated: prevValue.subject.isValidated,
            },
            message: {
              errorMessages: prevValue.message.errorMessages,
              isValidated: prevValue.message.isValidated,
            },
          };
        });
        break;
      case "user-form-input-subject":
        setUserInput((prevValue) => {
          return {
            fullName: prevValue.fullName,
            emailAddress: prevValue.emailAddress,
            subject: inputValue,
            message: prevValue.message,
          };
        });
        setUserInputValidity((prevValue) => {
          return {
            fullName: {
              errorMessages: prevValue.fullName.errorMessages,
              isValidated: prevValue.fullName.isValidated,
            },
            emailAddress: {
              errorMessages: prevValue.emailAddress.errorMessages,
              isValidated: prevValue.emailAddress.isValidated,
            },
            subject: {
              errorMessages: prevValue.subject.errorMessages,
              isValidated: true,
            },
            message: {
              errorMessages: prevValue.message.errorMessages,
              isValidated: prevValue.message.isValidated,
            },
          };
        });
        break;
      case "user-form-input-message":
        setUserInput((prevValue) => {
          return {
            fullName: prevValue.fullName,
            emailAddress: prevValue.emailAddress,
            subject: prevValue.subject,
            message: inputValue,
          };
        });
        setUserInputValidity((prevValue) => {
          return {
            fullName: {
              errorMessages: prevValue.fullName.errorMessages,
              isValidated: prevValue.fullName.isValidated,
            },
            emailAddress: {
              errorMessages: prevValue.emailAddress.errorMessages,
              isValidated: prevValue.emailAddress.isValidated,
            },
            subject: {
              errorMessages: prevValue.subject.errorMessages,
              isValidated: prevValue.subject.isValidated,
            },
            message: {
              errorMessages: prevValue.message.errorMessages,
              isValidated: true,
            },
          };
        });
        break;
      default:
        break;
    }
  };

  /*
   This method handles action after user presses submit

  */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    setUserInputValidity(() => {
      return {
        fullName: formValidations.validateUsername(userInput.fullName),
        emailAddress: formValidations.validateEmail(userInput.emailAddress),
        subject: formValidations.validateSubject(userInput.subject),
        message: formValidations.validateMessage(userInput.message),
      };
    });

    if (
      formValidations.validateUsername(userInput.fullName).isValidated &&
      formValidations.validateEmail(userInput.emailAddress).isValidated &&
      formValidations.validateSubject(userInput.subject).isValidated &&
      formValidations.validateMessage(userInput.message).isValidated
    ) {
      console.log("Hello World");
    }
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-header-container">
        <h2 className="contact-form-header">How can I help?</h2>
      </div>
      <div className="contact-form-body-container">
        <Form>
          <Form.Group className="mb-3">
            {/* <Form.Label>Full Name</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Full Name (4-16 characters)"
              onChange={handleUserInput}
              id="user-form-input-name"
              value={userInput.fullName}
            />
            {!userInputValidity.fullName.isValidated
              ? userInputValidity.fullName.errorMessages.map((errorMessage) => {
                  return (
                    <Form.Label
                      key={errorMessage.errorMessage}
                      className="form-input-error-label"
                    >
                      {errorMessage.errorMessage}
                    </Form.Label>
                  );
                })
              : null}
          </Form.Group>
          <Form.Group className="mb-3">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              type="email"
              placeholder="Email address (3-64 characters)"
              onChange={handleUserInput}
              id="user-form-input-email"
              value={userInput.emailAddress}
            />
            {!userInputValidity.emailAddress.isValidated
              ? userInputValidity.emailAddress.errorMessages.map(
                  (errorMessage) => {
                    return (
                      <Form.Label
                        key={errorMessage.errorMessage}
                        className="form-input-error-label"
                      >
                        {errorMessage.errorMessage}
                      </Form.Label>
                    );
                  }
                )
              : null}
          </Form.Group>
          <Form.Group className="mb-3">
            {/* <Form.Label>Subject</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Subject"
              onChange={handleUserInput}
              id="user-form-input-subject"
              value={userInput.subject}
            />
            {!userInputValidity.subject.isValidated
              ? userInputValidity.subject.errorMessages.map((errorMessage) => {
                  return (
                    <Form.Label
                      key={errorMessage.errorMessage}
                      className="form-input-error-label"
                    >
                      {errorMessage.errorMessage}
                    </Form.Label>
                  );
                })
              : null}
          </Form.Group>
          <Form.Group className="mb-3">
            {/* <Form.Label>Message</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Message"
              onChange={handleUserInput}
              id="user-form-input-message"
              value={userInput.message}
            />
            {!userInputValidity.message.isValidated
              ? userInputValidity.message.errorMessages.map((errorMessage) => {
                  return (
                    <Form.Label
                      key={errorMessage.errorMessage}
                      className="form-input-error-label"
                    >
                      {errorMessage.errorMessage}
                    </Form.Label>
                  );
                })
              : null}
          </Form.Group>
          <Button variant="outline-success" type="submit" onClick={handleFormSubmit}>
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
