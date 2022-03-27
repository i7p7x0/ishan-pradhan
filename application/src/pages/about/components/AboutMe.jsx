import { React, useState, useEffect } from "react";
import Loader from "../../../components/loader/Loader";
// STYLE

import "../style/about-me.css";

const AboutMe = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [bio, setBio] = useState([]);

  useEffect(() => {
    let mounted = true;
    const sendRequest = async () => {
      const response = await fetch("http://localhost:5000/about/bio");
      const responseData = await response.json();
      if (mounted) {
        setBio(responseData);
        setIsLoaded(true);
      }
    };
    sendRequest();
    return () => (mounted = false);
  }, []);

  return (
    <>
      {isLoaded ? (
        <div className="about-me-container">
          <h1>About Me</h1>
          <hr />
          {bio.map((b) => {
            return <p key={b._id}>{b.content}</p>;
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default AboutMe;
