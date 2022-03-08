import { React } from "react";

// CUSTOM COMPONENTS
import SkillSet from "../../../components/skillsetCard/SkillSet";

// DATA
import mySkillset from "../../../data/mySkillset";

const AboutMeForDevelopers = () => {
  return (
    <div className="about-me-for-developers-container">
      <div className="about-me-for-developers-header-container">
        <h2 className="about-me-for-developers-header">Hi fellow Developer,</h2>
        <h5 className="about-me-for-developers-header-small">
          Here is my skillset
        </h5>
        <div className="about-me-for-developers-skillset-container">
          <SkillSet skillsets={mySkillset} />
        </div>
      </div>
    </div>
  );
};

export default AboutMeForDevelopers;
