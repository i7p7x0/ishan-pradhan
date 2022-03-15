import { React } from "react";
import { Button } from "react-bootstrap";

// STYLE
import "../style/message-detail.css";

const MessageDetails = (props) => {
  console.log(props);
  return (
    <div className="message-details-container">
      <span className="message-detail-child">
        <span className="message-detail-key">Name : </span>
        <span className="message-detail-value">{props.name}</span>
      </span>
      <span className="message-detail-child">
        <span className="message-detail-key">Email : </span>
        <span className="message-detail-value">{props.emailAddress}</span>
      </span>
      <span className="message-detail-child">
        <span className="message-detail-key"> Subject : </span>
        <span className="message-detail-value">{props.subject}</span>
      </span>
      <span className="message-detail-child">
        <span className="message-detail-key">Message : </span>
        <span className="message-detail-value">{props.message}</span>
      </span>
      <Button
        variant="outline-danger"
        onClick={() => {
          props.handleViewDetailsClick();
        }}
      >
        Close
      </Button>
    </div>
  );
};

export default MessageDetails;
