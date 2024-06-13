import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import navimage from "../../../src/logo1.jpg";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-left">
        <Link to="/">
          <img src={navimage} alt="Navigation Logo" className="footer-logo" />
        </Link>
      </div>
      <div className="footer-right">
        <h2>Contact Us</h2>
        <p>Rajesh R</p>
        <p>Address: 123 Main Street, Chennai,Tamil Nadu</p>
        <p>Email: safeh2o4@gmail.com</p>
        <p>Phone: +91 95786 77236</p>
      </div>
    </footer>
  );
}

export default Footer;
