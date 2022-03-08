import { React, useState } from "react";
import { Offcanvas, Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// ICONS
import {
  AiFillHome,
  AiFillMessage,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaBookReader,FaUserCircle } from "react-icons/fa";

//STYLE
import "./style/user-card.css";

const UserCard = () => {
  const [drawerState, setDrawerState] = useState(false);

  const handleDrawerState = () => {
    setDrawerState(!drawerState);
  };

  return (
    <Navbar expand={false} className="navbar-toggle-container">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleDrawerState}
          className="navbar-toggle-button"
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={drawerState}
        >
          <Offcanvas.Header
            closeButton
            className="canvas-container canvas-container-header"
            onClick={handleDrawerState}
          >
            <Offcanvas.Title
              id="offcanvasNavbarLabel"
              className="canvas-container canvas-container-title"
            >
              Ishan Pradhan
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="canvas-container canvas-container-body">
            <div className="avatar-container">
              <div className="avatar-image"></div>
              <div className="avatar-title">
                <h1 className="avatar-name">Ishan Pradhan</h1>
                <h2 className="avatar-designation">full stack web developer</h2>
                <hr />
              </div>
            </div>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="nav-link" to="/home" onClick={handleDrawerState}>
                <span className="nav-link-content">
                  <AiFillHome className="nav-item-icon" />
                  Home
                </span>
              </Link>
              <Link
                className="nav-link"
                to="/about"
                onClick={handleDrawerState}
              >
                <span className="nav-link-content">
                  <FaUserCircle className="nav-item-icon" />
                  About Me
                </span>
              </Link>
              <Link
                className="nav-link"
                to="#action2"
                onClick={handleDrawerState}
              >
                <span className="nav-link-content">
                  <FaBookReader className="nav-item-icon" />
                  Resume
                </span>
              </Link>
              <Link
                className="nav-link"
                to="#action2"
                onClick={handleDrawerState}
              >
                <span className="nav-link-content">
                  <AiFillMessage className="nav-item-icon" />
                  Contact
                </span>
              </Link>
              <Link
                className="nav-link"
                to="#action2"
                onClick={handleDrawerState}
              >
                <span className="nav-link-content nav-link-icons-only">
                  <AiFillLinkedin className="nav-item-icon" />
                  <AiFillGithub className="nav-item-icon" />
                  <AiFillInstagram className="nav-item-icon" />
                </span>
              </Link>
              <Link
                className="nav-link"
                to="#action2"
                onClick={handleDrawerState}
              >
                <span className="nav-link-content">
                  <AiOutlineDownload className="nav-item-icon" />
                  Download CV
                </span>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default UserCard;
