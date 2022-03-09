import { React } from "react";

// STYLE

import "./style/skill.css";

const Skill = (props) => {
  return props.skills.map((skill) => {
    return <li key={skill.key}>{skill.value}</li>;
  });
};

export default Skill;
