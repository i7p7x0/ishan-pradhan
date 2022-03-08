import { React } from "react";
import {
  FaServer,
  FaUpload,
  FaFirefoxBrowser,
  FaMobile,
  FaBug,
  FaFileCode,
} from "react-icons/fa";

// CUSTOM
import { constWhatIDo } from "../../../constants/constWhatIDo";

// STYLE
import "../style/about-my-can-dos.css";

const AboutMyCanDos = (props) => {
  return props.dos.map((doo) => {
    return (
      <div className="about-my-can-dos-container" key={doo.key}>
        <h2 className="about-my-can-dos-header">
          {doo.key === constWhatIDo.databaseDesign ? (
            <FaServer className="about-my-can-dos-icon" />
          ) : doo.key === constWhatIDo.etlDevelopment ? (
            <FaUpload className="about-my-can-dos-icon" />
          ) : doo.key === constWhatIDo.website ? (
            <FaFirefoxBrowser className="about-my-can-dos-icon" />
          ) : doo.key === constWhatIDo.mobileApplication ? (
            <FaMobile className="about-my-can-dos-icon" />
          ) : doo.key === constWhatIDo.debugAndSupport ? (
            <FaBug className="about-my-can-dos-icon" />
          ) : doo.key === constWhatIDo.code ? (
            <FaFileCode className="about-my-can-dos-icon" />
          ) : null}
          {doo.key}
        </h2>
        <div className="about-my-can-dos-body">
          <p className="about-my-can-dos-paragraph">{doo.value}</p>
        </div>
      </div>
    );
  });
};

export default AboutMyCanDos;
