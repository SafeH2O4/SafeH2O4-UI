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
        <p>Address: 123 Main Street, City, Country</p>
        <p>Email: contact@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;
