import { React } from "react";
import { Carousel } from "react-bootstrap";

// CUSTOM COMPONENTS
import HomeCarouselItem from "../components/HomeCarouselItem";

// STYLE

import "../style/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header-container">
        <h1 className="home-header">Ishan Pradhan</h1>
        <hr />
      </div>
      <Carousel interval="2000" controls={false} indicators={false} slide>
        <Carousel.Item>
          <HomeCarouselItem title="Developer." titleIndex="0" />
        </Carousel.Item>
        <Carousel.Item>
          <HomeCarouselItem title="MERN-STACK Developer." titleIndex="1" />
        </Carousel.Item>
        <Carousel.Item>
          <HomeCarouselItem title="React Native Developer." titleIndex="2" />
        </Carousel.Item>
        <Carousel.Item>
          <HomeCarouselItem title="ETL Developer." titleIndex="3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;


