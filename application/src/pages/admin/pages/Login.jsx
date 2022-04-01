import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoutButton from "../../../components/buttons/LogoutButton";
import { useSelector, useDispatch } from "react-redux";
import * as authenticationActions from "../../../stores/authentication/actions/Authentication";
import Admin from "./Admin";

// STYLE
import "../style/login.css";

const Login = (props) => {
  const token = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
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
  };

  // this method sends login request to server after clicking submit button
  const handleLoginState = async (username, password) => {
    dispatch(authenticationActions.logoutAdmin());
    const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const responseData = await response.json();
    if (responseData.accessToken === "invalid") {
      return dispatch(authenticationActions.loginFailed());
    }
    localStorage.token = responseData.accessToken;
    dispatch(authenticationActions.loginAdmin(localStorage.token));
  };

  return (
    <>
      {token !== "" && token !== "invalid" &&token!==null ? (
        <Admin />
      ) : (
        <div className="login-form-container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h1>Login as admin</h1>
              <Form.Label>Username</Form.Label>

              <Form.Control
                type="text"
                placeholder="Enter username"
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

            <Link
              to="/admin"
              onClick={() => {
                handleLoginState(loginData.username, loginData.password);
              }}
            >
              <Button variant="primary">Submit</Button>
            </Link>
          </Form>
        </div>
      )}
    </>
  );
};

export default Login;
