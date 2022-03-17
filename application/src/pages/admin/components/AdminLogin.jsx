import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
// CUSTOM COMPONENTS
import postLogin from "../../../requests/post/postLogin";

// STYLE
import "../style/admin-login.css";

const AdminLogin = (props) => {
  // this state holds user input
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  //  set state based on user input change
  const handleUserInput = (event) => {
    event.preventDefault();

    let id = event.target.id;
    let value = event.target.value;
    if (id === "form-username") {
      setLoginData((previousValue) => {
        return {
          username: value,
          password: previousValue.password,
        };
      });
    } else if (id === "form-password") {
      setLoginData((previousValue) => {
        return {
          username: previousValue.username,
          password: value,
        };
      });
    }
    console.log(loginData);
  };

  // this method sends login request to server after clicking submit button
  const handleLoginState = async (username, password) => {
    props.handleLoginState();
    postLogin(loginData.username, loginData.password);
  };

  return (
    <div className="admin-login-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>Login as admin</h1>
          <Form.Label>Username</Form.Label>

          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={handleUserInput}
            id="form-username"
            value={loginData.username}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handleUserInput}
            id="form-password"
            value={loginData.password}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            handleLoginState(loginData.username, loginData.password);
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;

<div></div>;
