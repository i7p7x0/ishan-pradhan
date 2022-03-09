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
      <div className="resume-container-child">
        <ResumeEducation />
      </div>
      <div className="resume-container-child">
        <ResumeExperience />
      </div>
      <div className="resume-container-child">
        <ResumeTopSkills />
      </div>
    </div>
  );
};

export default Resume;
