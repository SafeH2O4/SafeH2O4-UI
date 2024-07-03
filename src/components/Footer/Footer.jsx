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
        <p>SAFEH2O4U RO WATER PURIFIER </p>
        <p>Bollineni hillside phase 2</p>
        <p>Sithalapakkam post</p>
        <p>Chennai, Tamilnadu</p>
        <p>Pin: 600126</p>
        <a href="http://Wa.me/+917012587405">Whatsapp: +91 70125 87405</a>
      </div>
    </footer>
  );
}

export default Footer;
