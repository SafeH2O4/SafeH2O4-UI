import React from "react";
import "./About.css";
import Aboutus from "../Aboutus/aboutvector.svg";

const About = () => {
  return (
    <div className="about">
      <img className="aboutimg" src={Aboutus} alt="" />
      <div className="aboutcontent">
        <h1>About us</h1>
        <p>
          Welcome to Safe H20, where we are dedicated to providing you with the
          cleanest, healthiest, and safest drinking water. Our mission is to
          ensure every household has access to pure water, free from
          contaminants and impurities. With years of expertise and a passion for
          innovation, we offer a range of state-of-the-art water purification
          systems tailored to meet the diverse needs of our customers. At Safe
          H20, we believe that access to clean water is a fundamental right. Our
          team of experts works tirelessly to develop advanced filtration
          technologies that remove harmful substances while preserving essential
          minerals, ensuring that every drop is not only safe but also
          refreshing and beneficial to your health. Our commitment to quality
          and customer satisfaction drives us to deliver products that are
          reliable, efficient, and environmentally friendly. Join us on our
          journey towards a healthier lifestyle and a cleaner planet. Choose
          Safe H20 for your home and experience the difference that pure, clean
          water can make. Thank you for trusting us with your water purification
          needs.
        </p>
      </div>
    </div>
  );
};

export default About;
