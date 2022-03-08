import { React } from "react";
import { SiReact } from "react-icons/si";
import { FaLaptopCode, FaMobile, FaDatabase } from "react-icons/fa";
// CSS
import "../style/home-carousel-item.css";
const HomeCarouselItem = (props) => {
  return (
    <div className="carousel-item-container">
      {props.titleIndex === "0" ? (
        <FaLaptopCode className="carousel-item-icon" />
      ) : props.titleIndex === "1" ? (
        <SiReact className="carousel-item-icon" />
      ) : props.titleIndex === "2" ? (
        <FaMobile className="carousel-item-icon" />
      ) : props.titleIndex === "3" ? (
        <FaDatabase className="carousel-item-icon" />
      ) : null}
      <div className="carousel-item-title">{props.title}</div>
    </div>
  );
};

export default HomeCarouselItem;
