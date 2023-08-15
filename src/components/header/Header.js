import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import USER_PIC from "../../images/user-png-33856.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Movie App</div>
      <div className="user-image">
        <img src={USER_PIC} alt="user-image" />
      </div>
    </div>
  );
};

export default Header;
