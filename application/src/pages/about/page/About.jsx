import { React } from "react";

// CUSTOM COMPONENTS
import AboutMe from "../components/AboutMe";
import AboutMyProperties from "../components/AboutMyProperties";
import AboutMyCanDos from "../components/AboutMyCanDos";

// DATA
import MY_PROPERTIES from "../../../data/myProperties";
import MY_CAN_DOS from "../../../data/myCanDos";

// STYLE
import "../style/about.css";

const About = () => {
  return (
    <div className="about-container">
      <AboutMe />
      <hr />
      <AboutMyProperties properties={MY_PROPERTIES} />
      <hr />
      <div className="what-i-do-container">
        <h1>What I Do</h1>
        <AboutMyCanDos dos={MY_CAN_DOS} />
      </div>
      <hr />
    </div>
  );
};

export default About;
