import React from "react";
import "../MiddlePage/Mainpg.css";

const MainPg = () => {
  return (
    <div className="main-page">
      <div className="quote-section">
        <p className="quote">Transform Your Tap: Taste the Difference.</p>
      </div>
      <div className="image-scroller">
        <div className="image-container">
          <img src="path/to/img1.png" alt="Refreshing water from a tap" />
          <img src="path/to/img2.png" alt="Close-up of a water purifier" />
          <img src="path/to/img3.png" alt="A family enjoying purified water" />
        </div>
      </div>
    </div>
  );
};

export default MainPg;
