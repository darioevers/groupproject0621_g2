import React from "react";
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
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook />
            </a>
          </li>
          <li className="listItem">
            <a href="https://www.twitter.com/" target="_blank">
              <FaTwitter />
            </a>
          </li>
          <li className="listItem">
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li className="listItem">
            <a href="https://www.vimeo.com/" target="_blank">
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
