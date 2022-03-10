import { React } from "react";

// CUSTOM COMPONENTS
import ContactCard from "./components/ContactCard";
import { constContactType } from "../../constants/constContactType";
import ContactForm from "./components/ContactForm";
// DATA
import myContactTypes from "../../data/myContactTypes";

// STYLE
import "./style/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-container-child contact-container-child-heading">
        <h2 className="contact-container-child-header">Contact</h2>
        <hr />
      </div>
      <div className="contact-container-child contact-container-child-card">
        <ContactCard typeBool={false} contactTypes={myContactTypes} />
      </div>
      <div className="contact-container-child contact-container-child-form">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
