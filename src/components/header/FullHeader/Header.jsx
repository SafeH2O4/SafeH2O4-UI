import "../FullHeader/Header.css";
import navimage from "../../../../src/logo1.jpg";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div>
        <Link to="/">
          <img src={navimage} alt="Navigation Logo" />
        </Link>
      </div>

      <ul>
        <Link className="links" to="/about">
          About us
        </Link>
        <Link className="links" to="/product">
          Product
        </Link>
        <li>
          <SocialIcon url="https://www.facebook.com" className="socialicons" />
        </li>
        <li>
          <SocialIcon url="https://www.instagram.com" className="socialicons" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
