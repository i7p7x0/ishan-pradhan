import { React } from "react";

// STYLE

import "../style/about-my-properties.css";

const AboutMyProperties = (props) => {
  return props.properties.map((property) => {
    return (
      <div className="about-my-properties-container" key={property.key}>
        <span className="about-my-properties-key">{property.key}</span>
        <span className="about-my-properties-colon"> : </span>
        <span className="about-my-properties-value">{property.value}</span>
      </div>
    );
  });
};

export default AboutMyProperties;
