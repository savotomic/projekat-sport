import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        <text>
          Made with ♥️ and <b>React.js</b>.
        </text>
      </span>
    </footer>
  );
};

export default Footer;