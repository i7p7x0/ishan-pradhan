import { React } from "react";
import {
  FaStar,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaCloudUploadAlt,
} from "react-icons/fa";
// CUSTOM COMPONENT
import Skill from "./Skill";

// STYLE

import "./style/skill-set.css";

// DATA
import { constSkillSet } from "../../constants/constSkillSet";

const SkillSet = (props) => {
  return props.skillsets.map((skillset) => {
    return (
      <div className="skillset-container" key={skillset.key}>
        <div className="skillset-header-container">
          <span className="skillset-header-icon-container">
            {skillset.key === constSkillSet.topSkills ? (
              <FaStar className="skillset-header-icon" />
            ) : skillset.key === constSkillSet.frontEnd ? (
              <FaHtml5 className="skillset-header-icon" />
            ) : skillset.key === constSkillSet.backEnd ? (
              <FaNodeJs className="skillset-header-icon" />
            ) : skillset.key === constSkillSet.database ? (
              <FaDatabase className="skillset-header-icon" />
            ) : skillset.key === constSkillSet.services ? (
              <FaCloudUploadAlt className="skillset-header-icon" />
            ) : null}
          </span>
          <span className="skillset-header">{skillset.key}</span>
          <hr />
        </div>
        <div className="skillset-body-container">
          <ul className="skillset-body-unordered-list">
            <Skill skills={skillset.value} />
          </ul>
        </div>
      </div>
    );
  });
};

export default SkillSet;
