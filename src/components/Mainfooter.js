import React from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaVimeoV,
    FaRegUserCircle,
  } from "react-icons/fa";
export default function Aboutfooter({ menuOpen, setMenuOpen }) {
  return (
    <div class="mainFooter">
        <div class="mainFooter-top">
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
        </div>
        <div class="mainFooter-mid">
        <div className={"menuFooter " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>Link1</li>
        <li onClick={() => setMenuOpen(false)}>Link2</li>
        <li onClick={() => setMenuOpen(false)}>Link3</li>
        <li onClick={() => setMenuOpen(false)}>Link4</li>
        <li onClick={() => setMenuOpen(false)}>Link5</li>
        <li onClick={() => setMenuOpen(false)}>Link6</li>
        {/*  {console.log()} */}
      </ul>
    </div>
        </div>
        <div class="mainFooter-bot">
            <p>© 2021  dci project</p>
        </div>
    </div>
  );
}
