import { React } from "react";

const Skill = (props) => {
  return props.skills.map((skill) => {
    return <li key={skill.key}>{skill.value}</li>;
  });
};

export default Skill;
