import { React } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone, FaMailBulk, FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbOn } from "react-icons/md";

// STYLE

import "../style/contact-card.css";

const ContactCard = (props) => {
  return (
    <>
      {props.contactTypes.map((contactType) => {
        return (
          <>
            {" "}
            <div className="contact-card-container" key={contactType._id}>
              <div className="contact-card-body">
                <FaPhone className="contact-card-icon" />
              </div>
              <div className="contact-card-header">
                <span className="contact-card-header-content">
                  {contactType.phoneNumber}
                </span>
              </div>
            </div>
            <div className="contact-card-container" key={contactType._id}>
              <div className="contact-card-body">
                <FaMailBulk className="contact-card-icon" />
              </div>
              <div className="contact-card-header">
                <span className="contact-card-header-content">
                  {contactType.emailAddress}
                </span>
              </div>
            </div>
            <div className="contact-card-container" key={contactType._id}>
              <div className="contact-card-body">
                <HiLocationMarker className="contact-card-icon" />
              </div>
              <div className="contact-card-header">
                <span className="contact-card-header-content">
                  {contactType.location}
                </span>
              </div>
            </div>
            <div className="contact-card-container" key={contactType._id}>
              <div className="contact-card-body">
                {contactType.freelance ? (
                  <FaCheckCircle className="contact-card-icon contact-card-icon-true" />
                ) : (
                  <MdDoNotDisturbOn className="contact-card-icon contact-card-icon-false" />
                )}
              </div>
              <div className="contact-card-header">
                <span className="contact-card-header-content">
                  Freelance available
                </span>
              </div>
            </div>
            <div className="contact-card-container" key={contactType._id}>
              <div className="contact-card-body">
                {contactType.recruitment ? (
                  <FaCheckCircle className="contact-card-icon contact-card-icon-true" />
                ) : (
                  <MdDoNotDisturbOn className="contact-card-icon contact-card-icon-false" />
                )}
              </div>
              <div className="contact-card-header">
                <span className="contact-card-header-content">
                  Recruitment available
                </span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ContactCard;
