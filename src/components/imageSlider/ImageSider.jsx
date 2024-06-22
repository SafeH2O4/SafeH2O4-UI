import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../imageSlider/ImageSlider.css";

import img1 from "../MiddlePage/img13.jpg";
import img2 from "../MiddlePage/img11.jpg";
import img3 from "../MiddlePage/img20.jpg";

const ImageSider = () => {
  return (
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
  );
};

export default ImageSider;
