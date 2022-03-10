import React from "react";
import { Offcanvas } from "react-bootstrap";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
// STYLE

import "./style/user-card-static.css";

const UserCardStatic = () => {
  return (
    <div className="user-card-static-container">
      <Offcanvas.Body>
        <div className="avatar-container">
          <div className="avatar-image"></div>
          <div className="user-card-static-title-container">
            <span className="user-card-static-title-name">Ishan Pradhan</span>
            <br />
            <span className="user-card-static-title-title">
              Full-Stack Web Developer
            </span>
            <br />
            <div className="user-card-static-icons-container">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillInstagram />
              <FaDiscord />
            </div>
            <hr />
          </div>
        </div>
      </Offcanvas.Body>
    </div>
  );
};

export default UserCardStatic;
