import { React, useState, useEffect } from "react";
import Loader from "../../../components/loader/Loader";
// STYLE
import "../style/resume-education.css";

const ResumeEducation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/education");
      const responseData = await response.json();
      if (mounted) {
        setEducationList(responseData);
        setIsLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="resume-education-container">
          <div className="resume-education-header-container">
            <h2 className="resume-education-header">Education</h2>
            <hr />
          </div>

          {educationList.map((education) => {
            return (
              <div
                className="resume-education-body-container"
                key={education._id}
              >
                <span className="degree">{education.degreeName}</span>
                <br />
                <span className="university">{education.university}</span>
                <br />
                <span className="year">
                  {education.startDate} - {education.endDate}
                </span>
                <br />
                <span className="teaser">{education.about}</span>
                <br />
                <br />
                <br />
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default ResumeEducation;
