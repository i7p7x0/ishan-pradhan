import { React } from "react";

// STYLE
import "../style/resume-education.css";

const ResumeEducation = () => {
  return (
    <div className="resume-education-container">
      <div className="resume-education-header-container">
        <h2 className="resume-education-header">Education</h2>
        <hr />
      </div>
      <div className="resume-education-body-container">
        <span className="degree">Bachelor in Computer Applications</span>
        <br />
        <span className="university">Chitkara University</span>
        <br />
        <span className="year">2015-2018</span>
        <br />
        <span className="teaser">
          Programming | Web development | Data Warehousing | Digital Marketing |
          Networking | Hardware | Security
        </span>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ResumeEducation;
