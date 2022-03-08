import { React } from "react";

// CUSTOM COMPONENTS
import AboutMe from "../components/AboutMe";
import AboutMyProperties from "../components/AboutMyProperties";

// DATA
import MY_PROPERTIES from "../../../data/myProperties";

// STYLE
import "../style/about.css";

const About = () => {
  return (
    <div className="about-container">
      <AboutMe />
      <AboutMyProperties properties={MY_PROPERTIES} />
    </div>
  );
};

export default About;
