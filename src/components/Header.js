import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaVimeoV,
  FaRegUserCircle,
} from "react-icons/fa";
export default function Header() {
  return (
    <header className="mainNav">
      <div className="iconsWrapper">
        <ul className="iconsList">
          <li className="listItem">
            <Link to="#" target="blank">
              <FaFacebook />
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" target="blank">
              <FaTwitter />
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" target="blank">
              <FaInstagram />
            </Link>
          </li>
          <li className="listItem">
            <Link to="#" target="blank">
              <FaVimeoV />
            </Link>
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
