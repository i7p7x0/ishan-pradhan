import React from "react";
import { Button } from "react-bootstrap";

// STYLE
import "../style/message-detail.css";
const MessageDetail = (props) => {
  return (
    <div className="message-detail-container">
      <span className="message-detail-heading">Name : </span>
      <span className="message-detail-body">{props.name}</span>
      <br />
      <span className="message-detail-heading">Email Address : </span>
      <span className="message-detail-body">{props.emailAddress}</span>
      <br />
      <span className="message-detail-heading">Subject : </span>
      <span className="message-detail-body">{props.subject}</span>
      <br />
      <span className="message-detail-heading">Message : </span>
      <span className="message-detail-body">{props.message}</span>
      <br />
      <Button
        onClick={() => {
          props.handleViewDetailsClick();
        }}
      >
        Close
      </Button>
    </div>
  );
};

export default MessageDetail;
