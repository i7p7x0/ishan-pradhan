import { React, useState, useEffect } from "react";
import Loader from "../../components/loader/Loader";
// CUSTOM COMPONENTS
import ContactCard from "./components/ContactCard";

import ContactForm from "./components/ContactForm";
// DATA

// STYLE
import "./style/contact.css";

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contactTypeList, setContactTypeList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:5000/contact/contactDetails"
      );
      const responseData = await response.json();
      if (mounted) {
        setContactTypeList(responseData);
        setIsLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="contact-container">
          <div className="contact-container-child contact-container-child-heading">
            <h1 className="contact-container-child-header">Contact</h1>
            <hr />
          </div>

          <div className="contact-container-child contact-container-child-card">
            <ContactCard typeBool={false} contactTypes={contactTypeList} />
          </div>
          <div className="contact-container-child contact-container-child-form">
            <ContactForm />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Contact;
