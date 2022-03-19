import { React } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as authenticationActions from "../../stores/authentication/actions/Authentication";
import { useDispatch } from "react-redux";
// STYLE

import "./style/logout-button.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authenticationActions.LOGOUT_ADMIN);
  };

  return (
    <Link to="/login" className="logout-button-link" onClick={handleLogout}>
      <Button variant="danger">Log Out</Button>
    </Link>
  );
};

export default LogoutButton;
