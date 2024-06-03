import "../FullHeader/Header.css";
import navimage from "../../../../src/navimg.png";
import facebook from "../../../../src/facebook.png";
import instagram from "../../../../src/instagram.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div>
        <img src={navimage} alt="Navigation Logo" />
      </div>

      <ul>
        <Link to="/about">About us</Link>
        <Link to="/product">Product</Link>
        <Link to="/service request">Service Request</Link>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="socialicons" src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="socialicons" src={instagram} alt="Instagram" />
        </a>
      </ul>
    </header>
  );
};

export default Header;
