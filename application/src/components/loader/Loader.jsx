import { React } from "react";
import { Spinner } from "react-bootstrap";

// STYLE
import "./style/loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
