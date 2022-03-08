import { React } from "react";

// CUSTOM COMPONENTS
import ContactCard from "./components/ContactCard";
import { constContactType } from "../../constants/constContactType";
// DATA
import myContactTypes from "../../data/myContactTypes";

// STYLE
import "./style/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-container-child">
        <h2 className="contact-container-child-header">Contact</h2>
      </div>
      <ContactCard typeBool={false} contactTypes={myContactTypes} />
    </div>
  );
};

export default Contact;
