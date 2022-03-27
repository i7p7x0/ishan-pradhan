import React from "react";
import { Offcanvas } from "react-bootstrap";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillSkype,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
// CUSTOM COMPONENTS
import AdminButton from "../buttons/AdminButton";
// STYLE
import face from "../../images/face.jpg";

import "./style/user-card-static.css";

const UserCardStatic = () => {
  return (
    <div className="user-card-static-container">
      <Offcanvas.Body>
        <div className="avatar-container">
          <div className="static-avatar-image">
            <img src={face} />
          </div>
          <div className="user-card-static-title-container">
            <span className="user-card-static-title-name">Ishan Pradhan</span>
            <br />
            <span className="user-card-static-title-title">
              Full-Stack Developer
            </span>
            <br />
            <span className="user-card-static-title-title">
              Web | Mobile | ETL
            </span>
            <br />

            <div className="user-card-static-icons-container">
              <AiFillLinkedin />
              <AiFillGithub />
              <AiFillInstagram />
              <FaDiscord />
            </div>

            <hr />
            <div className="user-card-static-icons-container">
              <AiFillSkype />{" "}
              <span className="user-card-static-title-title">
                live:ishan.pradhan_2
              </span>
            </div>
            <div className="user-card-static-icons-container">
              <AdminButton />
            </div>
          </div>
        </div>
      </Offcanvas.Body>
    </div>
  );
};

export default UserCardStatic;
