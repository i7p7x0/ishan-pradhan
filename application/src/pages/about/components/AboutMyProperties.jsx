import { React, useState, useEffect } from "react";
import Loader from "../../../components/loader/Loader";
// STYLE

import "../style/about-my-properties.css";

const AboutMyProperties = (props) => {
  const dt = new Date();
  let age;
  if (dt.getMonth >= 8 && dt.getDate >= 13) {
    age = dt.getFullYear() - 1997;
  } else {
    age = dt.getFullYear() - 1997 - 1;
  }

  let experience;
  if (dt.getMonth >= 9 && dt.getDate >= 17) {
    experience = dt.getFullYear() - 2018;
  } else {
    experience = dt.getFullYear() - 2018 - 1;
  }

  const [isLoaded, setIsLoaded] = useState(false);
  const [propertiesList, setPropertiesList] = useState([]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL+"/about/properties");
      const responseData = await response.json();
      if (mounted) {
        setPropertiesList(responseData);
        setIsLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);
  return propertiesList.map((property) => {
    return (
      <>
        {isLoaded ? (
          <div key={property._id}>
            <div className="about-my-properties-container">
              <span className="about-my-properties-key">Age</span>
              <span className="about-my-properties-colon"> : </span>
              <span className="about-my-properties-value">{age}</span>
            </div>
            <div className="about-my-properties-container">
              <span className="about-my-properties-key">Residence</span>
              <span className="about-my-properties-colon"> : </span>
              <span className="about-my-properties-value">
                {property.residence}
              </span>
            </div>{" "}
            <div className="about-my-properties-container">
              <span className="about-my-properties-key">Email Address</span>
              <span className="about-my-properties-colon"> : </span>
              <span className="about-my-properties-value">
                {property.emailAddress}
              </span>
            </div>{" "}
            <div className="about-my-properties-container">
              <span className="about-my-properties-key">Location</span>
              <span className="about-my-properties-colon"> : </span>
              <span className="about-my-properties-value">
                {property.address}
              </span>
            </div>{" "}
            <div className="about-my-properties-container">
              <span className="about-my-properties-key">Phone Number</span>
              <span className="about-my-properties-colon"> : </span>
              <span className="about-my-properties-value">
                {property.phoneNumber}
              </span>
            </div>{" "}
            <div className="about-my-properties-container">
              <span className="about-my-properties-key">Experience</span>
              <span className="about-my-properties-colon"> : </span>
              <span className="about-my-properties-value">
                {experience}+ years - till now
              </span>
            </div>{" "}
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  });
};

export default AboutMyProperties;
