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
            <li>
              <a className="link" href="#link1">
                MORE IN TECH
              </a>
            </li>

            <li>
              <a className="link" href="#link2">
                SPOTLIGHT
              </a>
            </li>

            <li>
              <a className="link" href="#link3">
                LATEST IN TECH
              </a>
            </li>

            <li>
              <a className="link" href="#link4">
                TRENDING
              </a>
            </li>

            <li>
              <a className="link" href="#link5">
                QUICK NEWS
              </a>
            </li>
            {/*  {console.log()} */}
          </ul>
        </div>
      </div>
      <div class="mainFooter-bot">
        <p>© 2021 dci project</p>
      </div>
    </div>
  );
}
