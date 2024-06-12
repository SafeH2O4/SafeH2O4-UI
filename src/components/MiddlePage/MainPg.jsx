import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../MiddlePage/Mainpg.css";
import img1 from "../MiddlePage/img13.jpg";
import img2 from "../MiddlePage/img11.jpg";
import img3 from "../MiddlePage/img20.jpg";

const MainPg = () => {
  return (
    <div className="main-page">
      <div className="quote-section">
        <p className="quote">Transform Your Tap: Taste the Difference.</p>
      </div>
      <div className="image-scroller">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Refreshing water from a tap"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Close-up of a water purifier"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="A family enjoying purified water"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default MainPg;
