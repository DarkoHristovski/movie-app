import { Link } from "react-router-dom";
import "./Footer.css"
import tvLogo from "../../icon/tv.png";

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
            
          </div>
        </div>

        <div className="item2">
          <p>
            Made by :
            <a href="https://github.com/DarkoHristovski"> Darko Hristovski</a> /
            <a href="https://github.com/AnnaHovzan">AnnaHovzan</a> /{" "}
            <a href="https://github.com/adichats92">Aadil</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
