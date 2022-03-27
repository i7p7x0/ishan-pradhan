import { React, useState } from "react";
import { Offcanvas, Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// ICONS
import {
  AiFillHome,
  AiFillMessage,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiOutlineDownload,
} from "react-icons/ai";
import { FaBookReader, FaUserCircle, FaDiscord } from "react-icons/fa";
import { constPageComponents } from "../../constants/constPageComponents";
import * as navigationIndicatorActions from "../../stores/navigationIndicator/actions/NavigationIndicator";
import face from "../../images/face.jpg";

//STYLE
import "./style/user-card.css";

const UserCard = () => {
  // this dispatch is used to set where the page is currently navigated
  const dispatch = useDispatch();

  // this variable identifies where the app is currently navigated to
  const currentNavigation = useSelector((state) => state.navigationIndicator);

  // This state determines whether the drawer is closed or open and sets the state of the drawer
  const [drawerState, setDrawerState] = useState(false);

  /*
  What happens to the drawer when you click on a navigation item
  i. the navigationindicator reducer is set to selected drawer item's corresponding page
  ii. the drawer is closed
  iii. the application is redirected to selected drawer item's corresponding page 
*/
  const handleDrawerState = (event) => {
    let selectedPage = String(event.target.outerText)
      .replace(/\s/g, "")
      .toLowerCase();

    let page = constPageComponents.home;
    switch (selectedPage) {
      case "aboutme":
        page = constPageComponents.aboutMe;
        break;
      case "resume":
        page = constPageComponents.resume;
        break;
      case "contact":
        page = constPageComponents.contact;
        break;
      default:
        break;
    }
    dispatch(navigationIndicatorActions.setNavigation(page));
    setDrawerState(!drawerState);
  };

  /*
  what happens to the drawer when you click on the close icon in the drawer and hamburger drawer icon
  i. the navigationindicator reducer is set to current window url's corresponding page
  ii. the drawer is closed
*/

  const handleDrawer = () => {
    let path = String(window.location.pathname).replace("/", "").toLowerCase();
    let page = constPageComponents.home;
    switch (path) {
      case "about":
        page = constPageComponents.aboutMe;
        break;
      case "resume":
        page = constPageComponents.resume;
        break;
      case "contact":
        page = constPageComponents.contact;
        break;
      default:
        break;
    }
    dispatch(navigationIndicatorActions.setNavigation(page));
    setDrawerState(!drawerState);
  };

  return (
    <Navbar expand={false} className="navbar-toggle-container">
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleDrawer}
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
            onClick={handleDrawer}
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
              <div className="avatar-image">
                <img src={face} />
              </div>
              <div className="avatar-title">
                <h1 className="avatar-name">Ishan Pradhan</h1>
                <h2 className="avatar-designation">full stack developer</h2>
                <hr />
              </div>
            </div>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link className="nav-link" to="/home" onClick={handleDrawerState}>
                <span
                  className={
                    currentNavigation.home
                      ? "nav-link-content-selected"
                      : "nav-link-content"
                  }
                >
                  <AiFillHome
                    className={
                      currentNavigation.home
                        ? "nav-item-icon-selected"
                        : "nav-item-icon"
                    }
                  />
                  Home
                </span>
              </Link>
              <Link
                className="nav-link"
                to="/about"
                onClick={handleDrawerState}
              >
                <span
                  className={
                    currentNavigation.aboutMe
                      ? "nav-link-content-selected"
                      : "nav-link-content"
                  }
                >
                  <FaUserCircle
                    className={
                      currentNavigation.aboutMe
                        ? "nav-item-icon-selected"
                        : "nav-item-icon"
                    }
                  />
                  About Me
                </span>
              </Link>
              <Link
                className="nav-link"
                to="/resume"
                onClick={handleDrawerState}
              >
                <span
                  className={
                    currentNavigation.resume
                      ? "nav-link-content-selected"
                      : "nav-link-content"
                  }
                >
                  <FaBookReader
                    className={
                      currentNavigation.resume
                        ? "nav-item-icon-selected"
                        : "nav-item-icon"
                    }
                  />
                  Resume
                </span>
              </Link>
              <Link
                className="nav-link"
                to="/contact"
                onClick={handleDrawerState}
              >
                <span
                  className={
                    currentNavigation.contact
                      ? "nav-link-content-selected"
                      : "nav-link-content"
                  }
                >
                  <AiFillMessage
                    className={
                      currentNavigation.contact
                        ? "nav-item-icon-selected"
                        : "nav-item-icon"
                    }
                  />
                  Contact
                </span>
              </Link>

              <span className="nav-link-content nav-link-icons-only">
                <a
                  href="https://www.linkedin.com/in/ishan-pradhan/"
                  target="_blank"
                  className="anchor-card-dynamic"
                >
                  <AiFillLinkedin className="nav-item-icon" />
                </a>{" "}
                <a
                  href="https://github.com/i7p7x0"
                  target="_blank"
                  className="anchor-card-dynamic"
                >
                  <AiFillGithub className="nav-item-icon" />
                </a>{" "}
                <a
                  href="https://discord.com/users/i7p7x0#0503"
                  target="_blank"
                  className="anchor-card-dynamic"
                >
                  <FaDiscord className="nav-item-icon" />
                </a>
              </span>

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
