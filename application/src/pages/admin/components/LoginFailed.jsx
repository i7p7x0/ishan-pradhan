import { React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// STYLE
import "../style/login-failed.css";
const LoginFailed = () => {
  return (
    <div className="login-failed-container">
      <span>Login Failed</span>
      <br />
      <Link to="/home">
        <Button variant="primary">Okay</Button>
      </Link>
    </div>
  );
};

export default LoginFailed;
