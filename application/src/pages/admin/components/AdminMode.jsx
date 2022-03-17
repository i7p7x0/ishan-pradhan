import { React, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MessageDetails from "./MessageDetails";
import { FaFolderOpen, FaCheckCircle } from "react-icons/fa";
// DATA

// STYLE
import "../style/admin-mode.css";

const AdminMode = () => {
  //this state increases by 1 everytime a message is deleted and re-executes the useEffect hook to fetch new list of messages
  const [fetchCycle, setFetchCycle] = useState(1);

  // this state determines wheter to display a message or display entire messages table
  const [detail, setDetail] = useState({
    show: false,
    id: "",
    name: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  // store fetched messages from collection in this state
  const [messageList, setMessageList] = useState({
    messages: "",
    loaded: false,
  });

  // get list of messages from server
  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/contact/");
      const responseData = await response.json();
      if (mounted) {
        setMessageList({ messages: responseData, loaded: true });
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, [[], fetchCycle]);

  // this method is responsible opening and passing parameters in message detail component
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

  const handleMarkMessageAsRead = async (id) => {
    await fetch("http://localhost:5000/contact/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    setFetchCycle(fetchCycle + 1);
  };

  return messageList.loaded ? (
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
              {messageList.messages.map((message) => {
                return (
                  <tr key={message._id}>
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
                          message._id,
                          message.name,
                          message.emailAddress,
                          message.subject,
                          message.message
                        );
                      }}
                    >
                      <FaFolderOpen size={20} />
                    </td>
                    <td
                      onClick={() => {
                        handleMarkMessageAsRead(message._id);
                      }}
                    >
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
  ) : null;
};

export default AdminMode;
