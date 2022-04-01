import { React, useState, useEffect } from "react";
import Loader from "../../../components/loader/Loader";
// STYLE

import "../style/resume-experience.css";

const ResumeExperience = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/experience");
      const responseData = await response.json();
      if (mounted) {
        setExperienceList(responseData);
        setIsLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="resume-experience-container">
          <div className="resume-experience-header-container">
            <h2 className="resume-experience-header">Experience</h2>
            <hr />
          </div>
          <div className="resume-experience-body">
            {experienceList.map((experience) => {
              return (
                <div
                  className="experience-child-container"
                  key={experience._id}
                >
                  <span className="title">{experience.title}</span>
                  <br />
                  <span>
                    {experience.employer}, {experience.employerAddress}
                  </span>
                  <br />
                  <span>{experience.domain} domain</span>
                  <br />
                  <span>
                    {experience.from} - {experience.to}
                  </span>
                  <div className="roles-container">
                    <ul>
                      {experience.experiencePoints.map((role) => {
                        return <li key={role._id}>{role.point}</li>;
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ResumeExperience;
