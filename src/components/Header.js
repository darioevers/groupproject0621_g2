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
<<<<<<< HEAD
            <Link to="#" target="blank">
=======
            <a href="https://www.facebook.com/" target="_blank">
>>>>>>> fabcc649add614b3720884d2b4523d082e9df053
              <FaFacebook />
            </Link>
          </li>
          <li className="listItem">
<<<<<<< HEAD
            <Link to="#" target="blank">
=======
            <a href="https://www.twitter.com/" target="_blank">
>>>>>>> fabcc649add614b3720884d2b4523d082e9df053
              <FaTwitter />
            </Link>
          </li>
          <li className="listItem">
<<<<<<< HEAD
            <Link to="#" target="blank">
=======
            <a href="https://www.instagram.com/" target="_blank">
>>>>>>> fabcc649add614b3720884d2b4523d082e9df053
              <FaInstagram />
            </Link>
          </li>
          <li className="listItem">
<<<<<<< HEAD
            <Link to="#" target="blank">
=======
            <a href="https://www.vimeo.com/" target="_blank">
>>>>>>> fabcc649add614b3720884d2b4523d082e9df053
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
