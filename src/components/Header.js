import React from "react";
import technoLogo from "./images/logo.png";

function Header() {
  return (
    <div>
      <div className="heading">
        <img
          src={technoLogo}
          alt="Not available at the moment!!!"
          className="logo"
        />
        <h2>Aptitude Test</h2>
        <h3>
          By Training & Placement Cell
          <br />
          BIT Durg
        </h3>
        <br />
      </div>
      <br />
    </div>
  );
}

export default Header;
