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
import face from "../../images/ishan.jpg"
// STYLE


import "./style/user-card-static.css";

const UserCardStatic = () => {
  return (
    <div className="user-card-static-container">
      <Offcanvas.Body>
        <div className="avatar-container">
          <div className="static-avatar-image">
          <img src={face}/>
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
              <a
                className="card-anchor"
                href="https://www.linkedin.com/in/ishan-pradhan/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
              <a
                className="card-anchor"
                href="https://github.com/i7p7x0"
                target="_blank"
              >
                <AiFillGithub />
              </a>

              <a
                className="card-anchor"
                href="https://discord.com/users/i7p7x0#0503"
                target="_blank"
              >
                <FaDiscord />
              </a>
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
