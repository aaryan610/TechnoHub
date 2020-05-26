import React from "react";
import technoLogo from "./images/technoLogo.png";
import bitLogo from "./images/bitLogo.png";

function Header() {
  return (
    <div>
      <div className="logosCont">
        <img
          src={bitLogo}
          alt="Bhilai Institute of Technology, Durg"
          className="logoLeft"
        />
        <img src={technoLogo} alt="TechnoHub, BIT Durg" className="logoRight" />
      </div>
      <div className="heading">
        <h2>Ek Bharat Shreshtha Bharat</h2>
        <h3>Online Quiz Competition</h3>
        <br />
      </div>
      <br />
    </div>
  );
}

export default Header;
