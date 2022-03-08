import { React } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { FaPhone, FaMailBulk, FaCheckCircle } from "react-icons/fa";
import { MdDoNotDisturbOn } from "react-icons/md";
// DATA
import { constContactType } from "../../../constants/constContactType";

// STYLE

import "../style/contact-card.css";

const ContactCard = (props) => {
  return props.contactTypes.map((contactType) => {
    return (
      <div className="contact-card-container" key={contactType.key}>
        <div className="contact-card-body">
          {contactType.key === constContactType.contactNumber ? (
            <FaPhone className="contact-card-icon" />
          ) : contactType.key === constContactType.emailAddress ? (
            <FaMailBulk className="contact-card-icon" />
          ) : contactType.key === constContactType.location ? (
            <HiLocationMarker className="contact-card-icon" />
          ) : contactType.key === constContactType.freelanceAvailable &&
            contactType.value ? (
            <FaCheckCircle className="contact-card-icon contact-card-icon-true" />
          ) : contactType.key === constContactType.recruitmentAvailable &&
            contactType.value ? (
            <FaCheckCircle className="contact-card-icon contact-card-icon-true" />
          ) : contactType.key === constContactType.freelanceAvailable &&
            !contactType.value ? (
            <MdDoNotDisturbOn className="contact-card-icon contact-card-icon-false" />
          ) : contactType.key === constContactType.recruitmentAvailable &&
            !contactType.value ? (
            <MdDoNotDisturbOn className="contact-card-icon contact-card-icon-false" />
          ) : null}
        </div>

        <div className="contact-card-header">
          <span className="contact-card-header-content">
            {contactType.key !== constContactType.freelanceAvailable &&
            contactType.key !== constContactType.recruitmentAvailable
              ? contactType.value
              : contactType.key}
          </span>
        </div>
      </div>
    );
  });
};

export default ContactCard;
