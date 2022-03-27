import { React, useState, useEffect } from "react";
import Loader from "../../../components/loader/Loader";
// CUSTOM COMPONENTS
import SkillSet from "../../../components/skillsetCard/SkillSet";

// DATA

// STYLE

import "../style/about-me-for-developers.css";

const AboutMeForDevelopers = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [skillSetList, setSkillSetList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/about/skills");
      const responseData = await response.json();
      if (mounted) {
        setSkillSetList(responseData);
        setIsLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);
  return (
    <>
      {isLoaded ? (
        <div className="about-me-for-developers-container">
          <div className="about-me-for-developers-header-container">
            <h2 className="about-me-for-developers-header">
              Hi fellow Developer,
            </h2>
            <h5 className="about-me-for-developers-header-small">
              Here is my skillset
            </h5>
            <div className="about-me-for-developers-skillset-container">
              {} <SkillSet skillsets={skillSetList} />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AboutMeForDevelopers;
