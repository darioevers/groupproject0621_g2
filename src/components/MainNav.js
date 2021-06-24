import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaVimeoV,
  FaRegUserCircle,
} from "react-icons/fa";
export default function Mainnav() {
  return (
    <header className="mainNav">
      <div className="iconsWrapper">
        <ul className="iconsList">
          <li className="listItem">
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li className="listItem">
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="listItem">
            <a href="#">
              <FaInstagram />
            </a>
          </li>
          <li className="listItem">
            <a href="#">
              <FaVimeoV />
            </a>
          </li>
        </ul>
      </div>
      <div className="heading">
        <h1>TECH NEWS</h1>
      </div>
      <div className="login">
        <button>SUBSCRIBE</button>

        <a href="#" className="loginLink">
          <FaRegUserCircle />
          LOGIN
        </a>
      </div>
    </header>
  );
}
