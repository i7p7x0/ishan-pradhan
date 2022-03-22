import { React, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FaRegFolderOpen, FaTrash } from "react-icons/fa";
import MessageDetail from "./MessageDetail";

const Message = () => {
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
  const token = useSelector((state) => state.authentication.token);
  const [messages, setMessages] = useState({ messages: [], loaded: false });

  // this fetches messages from database everytime the fetch cycle is changed
  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/contact/", {
        headers: { authorization: token },
      });
      const responseData = await response.json();
      if (mounted) {
        setMessages({ messages: responseData, loaded: true });
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

  // this deletes message and changes fetch cycle to send fetch request again
  const handleMarkMessageAsRead = async (id) => {
    await fetch("http://localhost:5000/contact/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    setFetchCycle(fetchCycle + 1);
  };

  return (
    <div className="message-container">
      <h1>Messages</h1>
      {messages.loaded ? (
        !detail.show ? (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Details</th>
                <th>Mark Read</th>
              </tr>
            </thead>
            <tbody>
              {messages.messages.map((message) => {
                return (
                  <tr key={message._id}>
                    <td>{message.name}</td>
                    <td>
                      {" "}
                      {message.emailAddress.length > 50
                        ? message.emailAddress.substring(0, 50) + " ..."
                        : message.emailAddress}
                    </td>
                    <td>
                      {message.subject.length > 50
                        ? message.subject.substring(0, 50) + " ..."
                        : message.subject}
                    </td>
                    <td>
                      {message.message.length > 50
                        ? message.message.substring(0, 50) + " ..."
                        : message.message}
                    </td>
                    <td>
                      <FaRegFolderOpen
                        onClick={() => {
                          handleViewDetailsClick(
                            message._id,
                            message.name,
                            message.emailAddress,
                            message.subject,
                            message.message
                          );
                        }}
                      />
                    </td>
                    <td>
                      <FaTrash
                        onClick={() => {
                          handleMarkMessageAsRead(message._id);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <MessageDetail
            handleViewDetailsClick={handleViewDetailsClick}
            id={detail.id}
            name={detail.name}
            emailAddress={detail.emailAddress}
            subject={detail.subject}
            message={detail.message}
          />
        )
      ) : null}
    </div>
  );
};

export default Message;
