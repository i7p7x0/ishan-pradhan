import { React } from "react";
import myTopSkills from "../../../data/myTopSkills";

// STYLE

import "../style/resume-top-skill.css";

const ResumeKeySkill = () => {
  return (
    <div className="resume-key-skills-container">
      <div className="resume-key-skills-header-container">
        <h2 className="resume-ley-skills-header">My Top Skills</h2>
        <hr />
        <div className="resume-key-skills-body-container">
          {myTopSkills.map((skill) => {
            return (
              <div className="resume-skill-child" key={skill.id}>
                <span className="skill-header">{skill.skill}</span>
                <br />
                <ul>
                  {skill.about.map((about) => {
                    return <li key={about.id}>{about.value}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeKeySkill;
