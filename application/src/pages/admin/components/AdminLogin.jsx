import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";

// STYLE
import "../style/admin-login.css";

const AdminLogin = (props) => {
  const handleLoginState = (event) => {
    event.preventDefault();
    props.handleLoginState();
  };

  return (
    <div className="admin-login-form-container">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <h1>Login as admin</h1>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleLoginState}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdminLogin;

<div></div>;
