import { React } from "react";

// CUSTOM COMPONENTS
import ResumeEducation from "./components/ResumeEducation";
import ResumeExperience from "./components/ResumeExperience";
import ResumeTopSkills from "./components/ResumeTopSkill";

// STYLE

import "./style/resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-child resume-header-container">
        <h1 className="resume-header">Resume</h1>
        <hr />
      </div>
      <div className="resume-container-child resume-education">
        <ResumeEducation />
      </div>
      <div className="resume-container-child resume-experience">
        <ResumeExperience />
      </div>
      <div className="resume-container-child resume-top-skill">
        <ResumeTopSkills />
      </div>
    </div>
  );
};

export default Resume;
