import { React } from "react";
import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
// STYLE
import "./styles/edit-contact.css";

const EditContact = (props) => {
  return (
    <div className="edit-contact-container">
      <div className="edit-contact-child">
        <h2>Edit your contact details</h2>
        <InputGroup className="mb-3">
          <InputGroup.Text>Phone Number</InputGroup.Text>
          <FormControl aria-label="First name" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email Address</InputGroup.Text>
          <FormControl aria-label="First name" />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Location</InputGroup.Text>
          <FormControl aria-label="First name" />
        </InputGroup>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Available for Freelancing"
        />
        <Form.Check
          type="switch"
          label="Available for Recruitment"
          id="disabled-custom-switch"
        />{" "}
        <Button variant="success">Done</Button>
      </div>
    </div>
  );
};

export default EditContact;
