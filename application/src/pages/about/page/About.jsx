import { React, useState } from "react";
import { Button } from "react-bootstrap";

// CUSTOM COMPONENTS
import AboutMe from "../components/AboutMe";
import AboutMyProperties from "../components/AboutMyProperties";
import AboutMyCanDos from "../components/AboutMyCanDos";
import AboutMeForDevelopers from "../components/AboutMeForDevelopers";

// DATA
import MY_PROPERTIES from "../../../data/myProperties";
import MY_CAN_DOS from "../../../data/myCanDos";

// STYLE
import "../style/about.css";

const About = () => {
  // state isDeveloper determines whether or not the user is a developer. If yes, they will be displayed technical skillset.
  const [isDeveloper, setIsDeveloper] = useState("-1");

  const handleIsDeveloperButtonPress = (event) => {
    let pressedButton = event.target.id;
    if (pressedButton === "developerY") {
      setIsDeveloper("1");
    } else if (pressedButton === "developerX") {
      setIsDeveloper("0");
    } else {
      setIsDeveloper("0");
    }
  };

  return (
    <div className="about-container">
      <AboutMe />
      <hr />
      <AboutMyProperties properties={MY_PROPERTIES} />
      <hr />
      <div className="what-i-do-container">
        <h1>What I Do</h1>
        <AboutMyCanDos dos={MY_CAN_DOS} />
        <hr />
      </div>
      <div className="about-me-for-developers-parent-container">
        {isDeveloper === "-1" ? (
          <div className="about-me-for-developers-choice-container">
            <h1>Are you a developer too?</h1>
            <div className="buttons-container">
              <Button
                variant="success"
                className="button"
                id="developerY"
                onClick={handleIsDeveloperButtonPress}
              >
                Yes
              </Button>

              <Button
                variant="danger"
                className="button"
                id="developerN"
                onClick={handleIsDeveloperButtonPress}
              >
                No
              </Button>
            </div>
          </div>
        ) : isDeveloper === "0" ? null : isDeveloper === "1" ? (
          <AboutMeForDevelopers />
        ) : null}
      </div>
    </div>
  );
};

export default About;
