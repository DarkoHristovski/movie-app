import { Link } from "react-router-dom";
import "./header.css"
import tvLogo from "../../icon/tv.png"
import Home from "../Main/Home/Home"

const Header = () => {
  return (
    <div className="header_wrapper">
      <Link to="/" className="logo">
          <img src={tvLogo} alt="logo" />
          <p>MovieFriend</p>
      </Link>
      <div className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/rating">Rating</Link>
        <Link to="/release">Release</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Header;
