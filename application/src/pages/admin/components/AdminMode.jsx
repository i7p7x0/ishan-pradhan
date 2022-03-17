import { React, useState } from "react";
import { Table } from "react-bootstrap";
import MessageDetails from "./MessageDetails";
import { FaFolderOpen, FaCheckCircle } from "react-icons/fa";
// DATA
import messages from "../../../data/TEMP_MESSAGES";

// STYLE
import "../style/admin-mode.css";

const AdminMode = () => {
  const [detail, setDetail] = useState({
    show: false,
    id: "",
    name: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const handleViewDetailsClick = (id, name, emailAddress, subject, message) => {
    setDetail({
      show: !detail.show,
      id: id === undefined ? "" : id,
      name: name === undefined ? "" : name,
      emailAddress: emailAddress === undefined ? "" : emailAddress,
      subject: subject === undefined ? "" : subject,
      message: message === undefined ? "" : message,
    });
  };

  return (
    <div className="admin-mode-container">
      {!detail.show ? <h1>Messages</h1> : null}
      {!detail.show ? (
        <div className="messsages-list-container">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Address</th>
                <th>Subject</th>
                <th>Message</th>
                <th>View Details</th>
                <th>Mark Read</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => {
                return (
                  <tr key={message.id}>
                    <td>{message.name}</td>
                    {message.emailAddress.length < 40 ? (
                      <td>{message.emailAddress}</td>
                    ) : (
                      <td>
                        {message.emailAddress.substring(0, 40) + " " + "...."}
                      </td>
                    )}
                    {message.subject.length < 15 ? (
                      <td>{message.subject}</td>
                    ) : (
                      <td>{message.subject.substring(0, 15) + " " + "...."}</td>
                    )}
                    {message.message.length < 100 ? (
                      <td>{message.message}</td>
                    ) : (
                      <td>
                        {message.message.substring(0, 100) + " " + "...."}
                      </td>
                    )}

                    <td
                      onClick={() => {
                        handleViewDetailsClick(
                          message.id,
                          message.name,
                          message.emailAddress,
                          message.subject,
                          message.message
                        );
                      }}
                    >
                      <FaFolderOpen size={20} />
                    </td>
                    <td>
                      <FaCheckCircle size={20} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      ) : null}

      {detail.show ? (
        <div className="messsage-detail-container">
          <MessageDetails
            handleViewDetailsClick={handleViewDetailsClick}
            id={detail.id}
            name={detail.name}
            emailAddress={detail.emailAddress}
            subject={detail.subject}
            message={detail.message}
          />
        </div>
      ) : null}
    </div>
  );
};

export default AdminMode;
