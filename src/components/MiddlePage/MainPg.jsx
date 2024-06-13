import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../MiddlePage/Mainpg.css";
import About from "../header/Aboutus/About.jsx";
import Product from "../header/Product/Product.jsx";

import ImageSider from "../imageSlider/ImageSider";
import Footer from "../Footer/Footer.jsx";

const MainPg = () => {
  return (
    <div className="main-page">
      <div className="quote-section">
        <p className="quote">Transform Your Tap: Taste the Difference.</p>
        <ImageSider />
      </div>
      <div>
        <About />
        <Product />
      </div>
      <Footer />
    </div>
  );
};

export default MainPg;
