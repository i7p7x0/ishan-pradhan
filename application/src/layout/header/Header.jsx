import { React } from "react";
import { AiFillHome, AiFillMessage, AiOutlineDownload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaBookReader,FaUserCircle } from "react-icons/fa";
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
        <Link to="/home" className="header-pc-link">
          <div className="header-pc-button">
            <div className="header-pc-icon">
              <AiFillHome />
            </div>
            <div className="header-pc-text">Home</div>
          </div>
        </Link>
        <Link to="/about" className="header-pc-link">
          <div className="header-pc-button">
            <div className="header-pc-icon">
              <FaUserCircle />
            </div>

            <div className="header-pc-text">About Me</div>
          </div>
        </Link>
        <Link to="/resume" className="header-pc-link">
          <div className="header-pc-button">
            <div className="header-pc-icon">
              <FaBookReader />
            </div>
            <div className="header-pc-text">Resume</div>
          </div>
        </Link>
        <Link to="/contact" className="header-pc-link">
          <div className="header-pc-button">
            <div className="header-pc-icon">
              <AiFillMessage />
            </div>
            <div className="header-pc-text">Contact</div>
          </div>
        </Link>
        <div className="header-pc-button">
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
