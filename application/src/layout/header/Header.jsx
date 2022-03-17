import { React } from "react";
import { AiFillHome, AiFillMessage, AiOutlineDownload } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FaBookReader, FaUserCircle } from "react-icons/fa";
// CUSTOM COMPONENTS
import UserCard from "../../components/userCard/UserCard";

//STYLE
import "./style/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-mobile-container">
        <UserCard />
      </div>
      <div className="header-pc-container">
        <NavLink
          to="/home"
          className="header-pc-link"
          activeClassName="header-pc-link-selected"
        >
          {({ isActive }) =>
            isActive ? (
              <div className="header-pc-button-selected">
                <div className="header-pc-icon">
                  <AiFillHome />
                </div>
                <div className="header-pc-text">Home</div>
              </div>
            ) : (
              <div className="header-pc-button">
                <div className="header-pc-icon">
                  <AiFillHome />
                </div>
                <div className="header-pc-text">Home</div>
              </div>
            )
          }
        </NavLink>
        <NavLink to="/about" className="header-pc-link">
          {({ isActive }) =>
            isActive ? (
              <div className="header-pc-button-selected">
                <div className="header-pc-icon">
                  <FaUserCircle />
                </div>

                <div className="header-pc-text">About Me</div>
              </div>
            ) : (
              <div className="header-pc-button">
                <div className="header-pc-icon">
                  <FaUserCircle />
                </div>

                <div className="header-pc-text">About Me</div>
              </div>
            )
          }
        </NavLink>
        <NavLink to="/resume" className="header-pc-link">
          {({ isActive }) =>
            isActive ? (
              <div className="header-pc-button-selected">
                <div className="header-pc-icon">
                  <FaBookReader />
                </div>
                <div className="header-pc-text">Resume</div>
              </div>
            ) : (
              <div className="header-pc-button">
                <div className="header-pc-icon">
                  <FaBookReader />
                </div>
                <div className="header-pc-text">Resume</div>
              </div>
            )
          }
        </NavLink>
        <NavLink to="/contact" className="header-pc-link">
          {({ isActive }) =>
            isActive ? (
              <div className="header-pc-button-selected">
                <div className="header-pc-icon">
                  <AiFillMessage />
                </div>
                <div className="header-pc-text">Contact</div>
              </div>
            ) : (
              <div className="header-pc-button">
                <div className="header-pc-icon">
                  <AiFillMessage />
                </div>
                <div className="header-pc-text">Contact</div>
              </div>
            )
          }
        </NavLink>
        <div className="header-pc-button-static">
          <div className="header-pc-icon">
            <AiOutlineDownload />
          </div>
          <div className="header-pc-text">Download CV</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
