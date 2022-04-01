import { React, useState, useEffect } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";
// STYLE
import "./styles/edit-contact.css";

const EditContact = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const [isLoaded, setLoaded] = useState({
    contact: false,
  });
  const [contact, setContact] = useState({
    phoneNumber: "",
    emailAddress: "",
    location: "",
    freelance: false,
    recruitment: false,
  });

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:5000/contact/contactDetails"
      );
      const responseData = await response.json();
      if (mounted) {
        setContact({
          phoneNumber: responseData[0].phoneNumber,
          emailAddress: responseData[0].emailAddress,
          location: responseData[0].location,
          freelance: responseData[0].freelance,
          recruitment: responseData[0].recruitment,
        });
        setLoaded({ contact: true });
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);

  const handleFormSubmit = async () => {
    const contactResponse = await fetch(
      "http://localhost:5000/contact/contactDetails",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
        body: JSON.stringify({
          phoneNumber: contact.phoneNumber,
          emailAddress: contact.emailAddress,
          location: contact.location,
          freelance: contact.freelance,
          recruitment: contact.recruitment,
        }),
      }
    );
    const contactResponseData = await contactResponse.json();
    if (contactResponseData.error) {
      alert(contactResponseData.errorMessage);
    } else if (!contactResponseData.error) {
      alert("Updated successfully");
    }
  };

  return (
    <div className="edit-contact-container">
      {isLoaded.contact ? (
        <>
          <div className="edit-contact-child">
            <h2>Edit your contact details</h2>
            <InputGroup className="mb-3">
              <InputGroup.Text>Phone Number</InputGroup.Text>
              <FormControl
                aria-label="phoneNumber"
                value={contact.phoneNumber}
                onChange={(event) => {
                  setContact((previousValue) => {
                    return {
                      phoneNumber: event.target.value,
                      emailAddress: previousValue.emailAddress,
                      location: previousValue.location,
                      freelance: previousValue.freelance,
                      recruitment: previousValue.recruitment,
                    };
                  });
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Email Address</InputGroup.Text>
              <FormControl
                aria-label="emailAddress"
                value={contact.emailAddress}
                onChange={(event) => {
                  setContact((previousValue) => {
                    return {
                      phoneNumber: previousValue.phoneNumber,
                      emailAddress: event.target.value,
                      location: previousValue.location,
                      freelance: previousValue.freelance,
                      recruitment: previousValue.recruitment,
                    };
                  });
                }}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Location</InputGroup.Text>
              <FormControl
                aria-label="location"
                value={contact.location}
                onChange={(event) => {
                  setContact((previousValue) => {
                    return {
                      phoneNumber: previousValue.phoneNumber,
                      emailAddress: previousValue.emailAddress,
                      location: event.target.value,
                      freelance: previousValue.freelance,
                      recruitment: previousValue.recruitment,
                    };
                  });
                }}
              />
            </InputGroup>
            <Form.Check
              checked={contact.freelance ? true : false}
              type="switch"
              id="custom-switch"
              label="Available for Freelancing"
              value={contact.freelance}
              onChange={(event) => {
                setContact((previousValue) => {
                  return {
                    phoneNumber: previousValue.phoneNumber,
                    emailAddress: previousValue.emailAddress,
                    location: previousValue.location,
                    freelance: !previousValue.freelance,
                    recruitment: previousValue.recruitment,
                  };
                });
              }}
            />
            <Form.Check
              checked={contact.recruitment ? true : false}
              type="switch"
              label="Available for Recruitment"
              id="disabled-custom-switch"
              value={contact.recruitment}
              onChange={(event) => {
                setContact((previousValue) => {
                  return {
                    phoneNumber: previousValue.phoneNumber,
                    emailAddress: previousValue.emailAddress,
                    location: previousValue.location,
                    freelance: previousValue.freelance,
                    recruitment: !previousValue.recruitment,
                  };
                });
              }}
            />{" "}
            <Button variant="success" onClick={handleFormSubmit}>
              Done
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default EditContact;
