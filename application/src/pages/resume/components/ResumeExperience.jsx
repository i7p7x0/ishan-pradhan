import { React } from "react";

// STYLE

import "../style/resume-experience.css";

// DATA

import myExperience from "../../../data/myExperience";

const ResumeExperience = () => {
  return (
    <div className="resume-experience-container">
      <div className="resume-experience-header-container">
        <h2 className="resume-experience-header">Experience</h2>
        <hr />
      </div>
      <div className="resume-experience-body">
        {myExperience.map((experience) => {
          return (
            <div className="experience-child-container" key={experience.id}>
              <span>{experience.title}</span>
              <br />
              <span>
                {experience.company}, {experience.location}
              </span>
              <br />
              <span>{experience.domain} domain</span>
              <br />
              <span>{experience.fromTo}</span>
              <div className="roles-container">
                <ul>
                  {experience.roles.map((role) => {
                    return <li key={role.id}>{role.role}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
        {/* <span>Software Engineer</span>
        <br />
        <span>LIS Nepal</span>
        <br />
        <span>Retail</span>
        <br />
        <span>Manbhavan - Lalitpur, Nepal</span>
        <br />
        <span>Sep-2018 - Jul-2021</span>
        <br />
        <div className="roles">
          <span>ETL Lead/Expert</span>
          <br />
          <span>ETL Development (SQL | ODI | Oracle)</span>
          <br />
          <span>ETL Support (Primary POC)</span>
          <br />
        </div>
        <div classname="clients">
          <span>Deckers</span>
          <br />
          <span>Makro</span>
          <br />
        </div> */}
      </div>
    </div>
  );
};

export default ResumeExperience;
