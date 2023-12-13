import { Link } from "react-router-dom";
import "./Footer.css";
import tvLogo from "../../icon/tv.png";
import facebookLogo from "../../icon/facebook.png";
import instagremLogo from "../../icon/instagram.png";
import twitter from "../../icon/twitter.png";

const Footer = () => {
  return (
    <>
      <div className="FooterWraper">
        <div className="item1">
          <Link
            to="/"
            className="logo"
            style={{ textDecoration: "none", color: "#2a0a3e" }}
          >
            <img src={tvLogo} alt="logo" style={{ width: "50px" }} />
          </Link>
          <div className="contacts">
            <img src={facebookLogo} alt="facebookLogo" className="socialIcon" />
            <img
              src={instagremLogo}
              alt="instagremLogo"
              className="socialIcon"
            />
            <img src={twitter} alt="twitter" className="socialIcon" />
          </div>
        </div>

        <div className="item2">
          <p>
            Made by :
            <a href="https://github.com/DarkoHristovski"> Darko Hristovski</a> /
            <a href="https://github.com/AnnaHovzan"> AnnaHovzan</a> /
            <a href="https://github.com/adichats92"> Aadil</a>
          </p>
          <p>2023 All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
