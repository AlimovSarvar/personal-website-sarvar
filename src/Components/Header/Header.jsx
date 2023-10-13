import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="header__inner">
          <nav className="nav">
            <div className="logo">
              <Link to={"/"}>
                <img src={logo}alt="" />
                <h1>Alimov</h1>
              </Link>
            </div>
            <ul className="header__list">
              <li>About me</li>
              <li>Services</li>
              <li>Contact me</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
