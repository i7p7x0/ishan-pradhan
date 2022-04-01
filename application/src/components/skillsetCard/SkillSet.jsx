import { React } from "react";
import {
  FaStar,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";
// CUSTOM COMPONENT

// STYLE

import "./style/skill-set.css";

// DATA
import { constSkillSet } from "../../constants/constSkillSet";

const SkillSet = (props) => {
  return (
    <>
      <div className="skillset-container">
        <div className="skillset-header-container">
          <span className="skillset-header-icon-container">
            <FaStar className="skillset-header-icon" />
          </span>
          <span className="skillset-header">Top Skills</span>
          <div className="skillset-body-container">
            <ul className="skillset-body-unordered-list">
              {props.skillsets
                .filter(
                  (filtered) => filtered.skillType === constSkillSet.topSkills
                )
                .map((skill) => {
                  return (
                    <li className="skill-li" key={skill._id}>
                      {skill.skillName}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="skillset-container">
        <div className="skillset-header-container">
          <span className="skillset-header-icon-container">
            <FaHtml5 className="skillset-header-icon" />
          </span>
          <span className="skillset-header">Front End</span>
          <div className="skillset-body-container">
            <ul className="skillset-body-unordered-list">
              {props.skillsets
                .filter(
                  (filtered) => filtered.skillType === constSkillSet.frontEnd
                )
                .map((skill) => {
                  return (
                    <li className="skill-li" key={skill._id}>
                      {skill.skillName}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="skillset-container">
        <div className="skillset-header-container">
          <span className="skillset-header-icon-container">
            <FaNodeJs className="skillset-header-icon" />
          </span>
          <span className="skillset-header">Back End</span>
          <div className="skillset-body-container">
            <ul className="skillset-body-unordered-list">
              {props.skillsets
                .filter(
                  (filtered) => filtered.skillType === constSkillSet.backEnd
                )
                .map((skill) => {
                  return (
                    <li className="skill-li" key={skill._id}>
                      {skill.skillName}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>{" "}
      <div className="skillset-container">
        <div className="skillset-header-container">
          <span className="skillset-header-icon-container">
            <FaDatabase className="skillset-header-icon" />
          </span>
          <span className="skillset-header">Database</span>
          <div className="skillset-body-container">
            <ul className="skillset-body-unordered-list">
              {props.skillsets
                .filter(
                  (filtered) => filtered.skillType === constSkillSet.database
                )
                .map((skill) => {
                  return (
                    <li className="skill-li" key={skill._id}>
                      {skill.skillName}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="skillset-container">
        <div className="skillset-header-container">
          <span className="skillset-header-icon-container">
            <FaCloudUploadAlt className="skillset-header-icon" />
          </span>
          <span className="skillset-header">Services</span>
          <div className="skillset-body-container">
            <ul className="skillset-body-unordered-list">
              {props.skillsets
                .filter(
                  (filtered) => filtered.skillType === constSkillSet.services
                )
                .map((skill) => {
                  return (
                    <li className="skill-li" key={skill._id}>
                      {skill.skillName}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
  // return props.skillsets.map((skillset) => {
  //   return (
  //     <div className="skillset-container" key={skillset.key}>
  //       <div className="skillset-header-container">
  //         <span className="skillset-header-icon-container">
  //           {skillset.key === constSkillSet.topSkills ? (
  //             <FaStar className="skillset-header-icon" />
  //           ) : skillset.key === constSkillSet.frontEnd ? (
  //             <FaHtml5 className="skillset-header-icon" />
  //           ) : skillset.key === constSkillSet.backEnd ? (
  //             <FaNodeJs className="skillset-header-icon" />
  //           ) : skillset.key === constSkillSet.database ? (
  //             <FaDatabase className="skillset-header-icon" />
  //           ) : skillset.key === constSkillSet.services ? (
  //             <FaCloudUploadAlt className="skillset-header-icon" />
  //           ) : null}
  //         </span>
  //         <span className="skillset-header">{skillset.key}</span>
  //         <hr />
  //       </div>
  //       <div className="skillset-body-container">
  //         <ul className="skillset-body-unordered-list">
  //           <Skill skills={skillset.value} />
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // });
};

export default SkillSet;
